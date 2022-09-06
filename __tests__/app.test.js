const request = require("supertest");
const app = require("../app.js");

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
        expect(typeof firstElement.slug).toBe("string");
        expect(typeof firstElement.description).toBe("string");
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
