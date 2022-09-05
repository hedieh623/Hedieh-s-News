//write tests ot check if our api is working
const request = require("supertest");
const app = require("../db/app.js");
const db = require("../db/index.js");

describe.only("GET /api/treasures", () => {
  test("responds with requested treasures", () => {
    return request(app)
      .get("/api/treasures")
      .expect(200)
      .then((res) => {
        expect(Array.isArray(res.body.treasures)).toBe(true);
      });
  });
});
