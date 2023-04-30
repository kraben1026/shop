import { authorization } from "../middlewares/authorization";
import { userService } from "../services/userService";
export const userController = {
  async getUsers(req, res) {
    try {
      const userId = authorization(req.headers.authorization).userId;
      let data = await userService.getUsers(userId);
      res.status(200).json(data);
    } catch (error) {}
  },
  async addUser(req, res) {
    try {
      const userData = req.body;
      let response = await userService.addUser(userData);
      res.status(201).json(response);
    } catch (error) {}
  },
  async myItems(req, res) {
    try {
      const userId = authorization(req.headers.authorization).userId;
      const response = await userService.myItems(userId);
      console.log(response);
      res.status(200).json(response);
    } catch (error) {}
  },
};
