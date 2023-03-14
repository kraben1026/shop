import { getUsers } from "../models/getUsers";
import { addUser } from "../models/addUSer";

export const userService = {
  async getUsers(userId) {
    return getUsers.getUsers(userId);
  },
  async addUser(userData) {
    return addUser.add(userData)
  }
};
