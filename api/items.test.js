const request = require("supertest");
const server = require("./server");
const db = require("../db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("[GET] /items", () => {
  test("liste döner", async () => {
    const res = await request(server).get("/items");
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(3);
  });
});

describe("[POST] /items", () => {
  test("yeni item ekler", async () => {
    const res = await request(server)
      .post("/items")
      .send({ name: "yeni item" });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("yeni item");
  });
});
