const express = require("express");
const itemsRouter = require("./items-router");

const server = express();

server.use(express.json());
server.use("/items", itemsRouter);

server.get("/", (req, res) => {
  res.json({ message: "API is up" });
});

module.exports = server;
