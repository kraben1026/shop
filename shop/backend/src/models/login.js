import { db } from "../data/connection";

export const loginModel = {
  async login(loginData) {
    return db.query("SELECT * FROM users WHERE username = ? AND password = ? ", [
      loginData.username,
      loginData.password,
    ]);
  },
};
