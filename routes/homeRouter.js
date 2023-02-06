const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/users", (req, res) => {
  console.log("hello");
  res.send("hello world");
});

homeRouter.post("/users", (req, res) => {
  res.send("router users - POST");
});

homeRouter.put("/users", (req, res) => {
  res.send("router users - PUT");
});

homeRouter.delete("/users", (req, res) => {
  res.send("router users - DELETE");
});

homeRouter.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send("router users - DELETE - id : " + id);
});

module.exports = { homeRouter };
