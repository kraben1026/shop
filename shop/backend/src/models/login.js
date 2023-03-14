import { db } from "../data/connection";
import bcrypt from 'bcrypt';

export const loginModel = {
  async login(loginData) {
    const user = await db.query("SELECT * FROM users WHERE username = ?", [
      loginData.username
    ]);
    console.log(user)
  },
};
