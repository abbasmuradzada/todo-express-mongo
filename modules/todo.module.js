const { db, client } = require("../mongo");

const getTodos = async (req, res, next) => {
  let todo;
  try {
    todo = await db.collectionn("todo").find().toArray();
  } catch (err) {
    return res.json({ msg: "err from abbas" });
  }
  client.close();
  res.json(todo);
};

module.exports = {
  getTodos: getTodos,
};
