const express = require("express");
require('dotenv').config();
const app = express();
const port = 3000;

const database = require("./config/database");
database.connect();

const Task = require("./model/task.model")

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({
    deleted: false,
  });

  res.json(tasks);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});