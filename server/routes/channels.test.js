const request = require("supertest");
const app = require("../app");
const db = require("../db");

// let client = db.client.connect();



describe("Channels API", () => {
  test("should create a new channel", async () => {
    const response = await request(app)
      .post("/api/channels")
      .send({ name: "test channel" });
    expect(response.status).toBe(201);
    expect(response.text).toContain("Channel added with ID");
  });

  test("should get all channels", async () => {
    await db.query("INSERT INTO channels (name) VALUES ($1)", ["test channel"]);
    const response = await request(app).get("/api/channels");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe("test channel");
  });

  test("should add a message to a channel", async () => {
    await db.query("INSERT INTO channels (name) VALUES ($1)", ["test channel"]);
    const result = await db.query("SELECT id FROM channels WHERE name = $1", ["test channel"]);
    const channelId = result.rows[0].id;
    const response = await request(app)
      .post(`/api/channels/${channelId}/add`)
      .send({ userId: 1, content: "test message" });
    expect(response.status).toBe(201);
    expect(response.text).toContain("Message added with ID");
  });

  test("should get a channel's messages", async () => {
    await db.query("INSERT INTO channels (name) VALUES ($1)", ["test channel"]);
    const result = await db.query("SELECT id FROM channels WHERE name = $1", ["test channel"]);
    const channelId = result.rows[0].id;
    await db.query(
      "INSERT INTO messages (author_id, channel_id, content, created_at) " +
      "VALUES($1, $2, $3, $4)",
      [1, channelId, "test message", new Date()]
    );
    const response = await request(app).get(`/api/channels/${channelId}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].content).toBe("test message");
  });
});
