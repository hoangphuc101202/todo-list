const todoModel = require("../model/TodoModel");
module.exports = {
  addTodo: async (req, res, next) => {
    try {
      const { task } = req.body;
      console.log(req.body);
      const todo = await todoModel.create({
        Task: task,
      });
      res.redirect("/home");
    } catch (error) {
      res.json(error.message);
    }
  },
  getHomeTodo: async (req, res) => {
    try {
      const todos = await todoModel.find({});
      res.render("home", {
        todos: todos,
      });
    } catch (error) {}
  },
  updateTodo: async (req, res) => {
    try {
      const { task } = req.body;
      const idTask = req.params.idTask;
      const taskUpdate = await todoModel.updateOne(
        {
          _id: idTask,
        },
        {
          Task: task,
        }
      );
      if (taskUpdate) {
        res.redirect("/home");
      }
    } catch (error) {
      res.json(error);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const idTask = req.params.idTask;
      const result = await todoModel.deleteOne({
        _id: idTask,
      });
      if (result) {
        res.redirect("/home");
      }
    } catch (error) {
      res.json(error);
    }
  },
};
