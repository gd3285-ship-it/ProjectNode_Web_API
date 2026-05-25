import TaskModel from "../Models/TaskModel.js";

const TasksController = {
  // שליפת כל המשימות
  getList: async (req, res) => {
    try {
      const tasks = await TaskModel.find();
      res.json(tasks);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  // הוספת משימה חדשה
  add: async (req, res) => {
    const { name } = req.body;
    try {
      const newTask = await TaskModel.create({ name, isComplete: false });
      res.json(newTask);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  // שליפת משימה בודדת לפי ID
  getById: async (req, res) => {
    try {
      const task = await TaskModel.findById(req.params.id);
      res.json(task);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  // עדכון משימה קיימת
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedTask = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedTask);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  // מחיקת משימה
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await TaskModel.findByIdAndDelete(id);
      res.json({ message: "Task deleted successfully" });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default TasksController;