const express = require("express");
require('dotenv').config();
const app = express();
const port = 3000;

const database = require("./config/database");
database.connect();

const Task = require("./model/task.model")

app.get("/tasks/detail/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Task.find({
    _id: id,
    deleted: false,
  });

  res.json(task);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});