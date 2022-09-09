const request = require("supertest");
const app = require("../app.js");
beforeAll(() => {
  const testData = require("../db/data/test-data/index.js");
  const seed = require("../db/seeds/seed.js");
  return seed(testData);
});

afterAll(() => {
  app.close();
});

describe("invalid endpoints", () => {
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
});

describe("GET /api/topics", () => {
  test("calls this endopoint and sees if it is an array or not", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  test("should return an endpoint(an array of objects) that has the properties slug", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((res) => {
        const firstElement = res.body[0];
        expect(firstElement.hasOwnProperty("slug")).toBe(true);
        expect(typeof firstElement).toBe("object");
        expect(typeof firstElement.slug).toBe("string");
      });
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

describe("GET /api/articles/:article_id", () => {
  test('should call this endopoint and sees if it is an object or not and if the article id matches the URL"', () => {
    return request(app)
      .get("/api/articles/1")
      .expect(200)
      .then((res) => {
        const article_id = res.body.article.article_id;
        const author = res.body.article.author;
        const title = res.body.article.title;
        const topic = res.body.article.topic;
        const body = res.body.article.body;
        const created_at = res.body.article.created_at;
        const votes = res.body.article.votes;

        expect(typeof res.body).toBe("object");
        expect(article_id).toBe(1);
        expect(author).toBe("butter_bridge");
        expect(title).toBe("Living in the shadow of a great man");
        expect(topic).toBe("mitch");
        expect(body).toBe("I find this existence challenging");
        expect(votes).toBe(100);
      });
  });
  test("should return the response(an object) that has the stated properties ", () => {
    return request(app).get("/api/articles/banana").expect(400);
  });
  test("should return the response(an object) that has the stated properties ", () => {
    return request(app)
      .get("/api/articles/1000")
      .expect(404)
      .then((res) => {
        const message = res.body.error;
        expect(message).toBe("No article was found with id: 1000");
      });
  });
});

describe("5. GET /api/users", () => {
  test("should return the response(an array of objects) that has the properties description", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body.users)).toBe(true);
        const firstElement = res.body.users[0];
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

describe("6. PATCH /api/articles/:article_id", () => {
  test("should return the response(an object) that has the ", () => {
    return request(app)
      .patch("/api/articles/2")
      .send({ inc_votes: 2 })
      .expect(200)
      .then((res) => {
        res.body.vote;
        expect(typeof res.body).toBe("object");
        expect(res.body.article.votes).toBe(2);
        expect(res.body.article.author).toBe("icellusedkars");
        expect(res.body.article.title).toBe("Sony Vaio; or, The Laptop");
        expect(res.body.article.topic).toBe("mitch");
      });
  });

  test("based on what number it is given, the votes key should be updated by substracting that number from the  value", () => {
    return request(app)
      .patch("/api/articles/1000")
      .send({ inc_votes: -5 })
      .expect(404)
      .then((res) => {
        const message = res.body.error;
        expect(message).toBe("No article was found with id: 1000");
      });
  });

  test("based on what number it is given, the votes key should be updated by substracting that number from the  value", () => {
    return request(app)
      .patch("/api/articles/banana")
      .send({ inc_votes: -5 })
      .expect(400)
      .then((res) => {
        const message = res.body.error;
        expect(message).toBe("article id must be a number");
      });
  });
  test('should ', () => {
    return request(app)
      .patch("/api/articles/abc")
      .send({ inc_votes: -5 })
      .expect(400)
      .then((res) => {
        const message = res.body.error;
        expect(message).toBe("article id must be a number");
      });

    
  });
});
