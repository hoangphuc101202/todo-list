const express = require("express");
const Router = express.Router();
const {
  addTodo,
  getHomeTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");
Router.post("/addTodo", addTodo);
Router.get("/home", getHomeTodo);
Router.post("/updateTodo/:idTask", updateTodo);
Router.get("/deleteTodo/:idTask", deleteTodo);
module.exports = Router;
