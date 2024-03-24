const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
  Task: {
    type: String,
    required: true,
  },
});
const todoModel = mongoose.model("todo", ToDoSchema);
module.exports = todoModel;
