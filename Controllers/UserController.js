// Controllers/UserController.js
import UserModel from "../Models/UserModel.js";

const UserController = {
  add: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const newUser = await UserModel.create({ name, email, password });
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  
  getList: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
};

export default UserController;