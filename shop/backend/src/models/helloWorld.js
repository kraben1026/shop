import { db } from "../data/connection";

export const helloWorld = {
  async get() {
    let data = await db.query("SELECT * FROM items");

    return data;
  },
};
