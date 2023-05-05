const express = require("express");
const cors = require("cors");

const db = require("./db");
const usersRouter = require("./routes/users");
const channelsRouter = require("./routes/channels");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// api routes
app.use("/api/users", usersRouter);
app.use("/api/channels", channelsRouter);

// create a test route to ping the db.client
app.get("/api", async (request, response) => {
  const { name } = request.body;

  try {
    const result = await db.query(
      "SELECT 1"
    );
    response.status(201).send(`Correcto ${result}`)
  } catch (err) {
    console.log(err);
    response.status(500).send("ERROR")
  }
});

module.exports = app;
