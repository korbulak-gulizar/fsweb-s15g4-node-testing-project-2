const router = require("express").Router();
const db = require("../db-config");

// GET /items
router.get("/", async (req, res) => {
  const items = await db("items");
  res.json(items);
});

// POST /items
router.post("/", async (req, res) => {
  const { name } = req.body;
  const [id] = await db("items").insert({ name });
  const newItem = await db("items").where({ id }).first();
  res.status(201).json(newItem);
});

module.exports = router;
