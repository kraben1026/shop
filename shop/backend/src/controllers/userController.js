import { authorization } from "../middlewares/authorization";
import { userService } from "../services/userService";
export const userController = {
  async get(req, res) {
    try {
      const userId = authorization(req.headers.authorization).userId
      let data = await userService.getUsers(userId);
    res.status(200).json(data);
    } catch (error) {
      
    }
    
  },
};
