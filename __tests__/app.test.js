const request = require("supertest");
const app = require("../app.js");

//run before the tests so that we recieve the right data in the db.
beforeEach(() => {
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
        expect(Array.isArray(res.body.topics)).toBe(true);
      });
  });
  test("should return an endpoint(an array of objects) that has the properties slug", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((res) => {
        const firstElement = res.body.topics[0];
        expect(typeof firstElement.slug).toBe("string");
        expect(typeof firstElement.description).toBe("string");
      });
  });
  test("should return the response(an array of objects) that has the properties description", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((res) => {
        const firstElement = res.body.topics[0];
        expect(firstElement.hasOwnProperty("description")).toBe(true);
        expect(typeof firstElement).toBe("object");
        expect(typeof firstElement.description).toBe("string");
      });
  });
});
