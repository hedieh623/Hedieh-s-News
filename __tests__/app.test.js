const request = require("supertest");
const app = require("../app.js");

//run before the tests so that we recieve the right data in the db.
beforeAll(() => {
  const testData = require("../db/data/test-data/index.js"); //the actual file . an array of objects
  const seed = require("../db/seeds/seed.js"); //seed is a funciton that takes the data and puts it in the database
  return seed(testData);
});

afterAll(() => {
  app.close();
});

describe("invalid endpoints", () =>{
  test("should respond with a `Route not found` message when the wrong path is requested", () => {
    return request(app)
      .get("/hedieh")
      .expect(404)
      .then((res) => {
        const message = res.body.message;
        expect(message).toBe("Route not found");
        expect(typeof res.body).toBe("object");
      });
  });
})

describe("GET /api/topics", () => {

  test("calls this endopoint and sees if it is an array or not", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  test('should return an endpoint(an array of objects) that has the properties slug', () => {
    return request(app)
    .get("/api/topics")
    .expect(200)
    .then((res)=>{
      const firstElement = res.body[0]
      expect(firstElement.hasOwnProperty('slug')).toBe(true);
      expect(typeof(firstElement)).toBe("object")
      expect(typeof(firstElement.slug)).toBe("string")
    })
  });

  test("should return the response(an array of objects) that has the properties description", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((res) => {
        const firstElement = res.body[0];
        expect(firstElement.hasOwnProperty("description")).toBe(true);
        expect(typeof firstElement).toBe("object");
        expect(typeof firstElement.description).toBe("string");
      });
  });
});

describe('GET /api/articles/:article_id', () => {
  test('should call this endopoint and sees if it is an object or not and if the article id matches the URL"', () => {
    return request(app)
    .get("/api/articles/1")
    .expect(200)
    .then((res)=>{
      const article_id = res.body.article_id;
      const author = res.body.author;
      const title = res.body.title;
      const topic = res.body.topic;
      const body = res.body.body;
      const created_at = res.body.created_at;
      const votes = res.body.votes;

      expect(typeof(res.body)).toBe("object")
      expect(article_id).toBe(1)
      expect(author).toBe("butter_bridge")
      expect(title).toBe("Living in the shadow of a great man")
      expect(topic).toBe("mitch")
      expect(body).toBe("I find this existence challenging")
      //expect(Date.parse(created_at)).toBe(1594329060000);
      expect(votes).toBe(100)
    })
  });

  test("should return the response(an object) that has the stated properties ", () => {
    return request(app)
      .get("/api/articles/1000")
      .expect(404);
  });
  
});

describe("5. GET /api/users", () => {
  test("should return the response(an array of objects) that has the properties description", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        const firstElement = res.body[0];
        expect(firstElement.hasOwnProperty("username")).toBe(true);
        expect(firstElement.hasOwnProperty("name")).toBe(true);
        expect(firstElement.hasOwnProperty("avatar_url")).toBe(true);
        expect(typeof firstElement).toBe("object");
        expect(typeof firstElement.username).toBe("string");
        expect(typeof firstElement.name).toBe("string");
        expect(typeof firstElement.avatar_url).toBe("string");
      });
  });
});
