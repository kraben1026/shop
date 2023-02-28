import { db } from "../data/connection";

export const getUsers = {
  async getUsers(userId) {
    let data = await db.query("SELECT username FROM users where id = ?", [userId]);
    return data;
  },
};
