import { getUsers } from "../models/getUsers";

export const userService = {
  async getUsers(userId) {
    return getUsers.getUsers(userId);
  },
};
