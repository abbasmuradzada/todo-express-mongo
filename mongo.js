const MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");

const url =
  "mongodb+srv://abbas123:abbas123@devconnector.ztnj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const createTodo = async (req, res, next) => {
  const client = new MongoClient(url);
  let todo;
  try {
    await client.connect();
    const db = client.db();
    todo = await db.collection("todo").insertOne({ name: req.body.name });
  } catch (err) {
    return res.json({ msg: "err from abbas" });
  }
  client.close();
  res.json(todo);
};

const updateTodo = async (req, res, next) => {
  const client = new MongoClient(url);
  let todo;
  try {
    await client.connect();
    const db = client.db();
    todo = await db
      .collection("todo")
      .updateOne(
        { _id: new mongodb.ObjectID(req.query.id) },
        { $set: { name: req.body.name } }
      );
  } catch (err) {
    return res.json({ msg: "err from abbas" });
  }
  client.close();
  res.json(todo);
};

const removeTodo = async (req, res, next) => {
  const client = new MongoClient(url);
  let todo;
  try {
    await client.connect();
    const db = client.db();
    todo = await db
      .collection("todo")
      .deleteOne({ _id: new mongodb.ObjectID(req.query.id) });
  } catch (err) {
    return res.json({ msg: "err from abbas" });
  }
  client.close();
  res.json(todo);
};

const getTodos = async (req, res, next) => {
  const client = new MongoClient(url);
  let todo;
  try {
    await client.connect();
    const db = client.db();
    todo = await db.collection("todo").find().toArray();
  } catch (err) {
    return res.json({ msg: "err from abbas" });
  }
  client.close();
  res.json(todo);
};

const getTodoById = async (req, res, next) => {
  const client = new MongoClient(url);
  let todo;
  try {
    await client.connect();
    const db = client.db();
    todo = await db
      .collection("todo")
      .findOne({ _id: new mongodb.ObjectID(req.query.id) });
  } catch (err) {
    return res.json({ msg: "err from abbas" });
  }
  client.close();
  res.json(todo);
};

exports.url = url;
exports.getTodos = getTodos;
exports.getTodoById = getTodoById;
exports.createTodo = createTodo;
exports.removeTodo = removeTodo;
exports.updateTodo = updateTodo;
