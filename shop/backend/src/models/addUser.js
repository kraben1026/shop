import { db } from "../data/connection";
import bcrypt from "bcrypt";
export const addUser = {
  async add(userData) {
    console.log(userData)
    const saltRounds = 10;
    const pw = userData.password;
    const hash = await bcrypt.hash(pw, saltRounds, (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
      } else {
        console.log(typeof hash)
        const add = db.query("INSERT INTO users (username, password) VALUES (?,?)", [userData.username, hash]);
        return 'ok'
      }
    });
    
  },
};
