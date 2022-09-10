const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

const api = require("./mongo");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", api.getTodos);
app.post("/todo", api.createTodo);
app.put("/todo", api.updateTodo);
app.get("/todo", api.getTodoById);
app.delete("/todo", api.removeTodo);

app.post("/", (req, res) => {
  console.log("bu 100% ishleyecek ", req.body);
  res.send(`Hello ${req.body.name}!`);
});

mongoose
  .connect(api.url)
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
