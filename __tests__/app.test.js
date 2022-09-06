//write tests ot check if our api is working
const request = require("supertest");
const app = require("../app.js");
const db = require("../db/index.js");

describe.only("GET /api/topics", () => {
  test("calls this endopoint and sees if it is an array or not", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((res) => {
      expect(Array.isArray(res.body)).toBe(true);
      });
  });
});
