import { getUsers } from "../models/getUsers";
import { addUser } from "../models/addUSer";
import {items} from "../models/items"

export const userService = {
  async getUsers(userId) {
    return getUsers.getUsers(userId);
  },
  async addUser(userData) {
    return addUser.add(userData)
  },
  async myItems(userId){
    console.log(userId);
    return items.myItems(userId)
  }
};
