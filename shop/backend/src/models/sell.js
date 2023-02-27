import { db } from "../data/connection";

export const sell = {
  async sell(itemData, userId) {
    try {
      const newItem = db.query(
        "INSERT INTO items (name, price, url, user_id) VALUES (?,?,?,?)",
        [itemData.name, itemData.price, itemData.url, userId]
      );
      return "ok";
    } catch (error) {
      return error;
    }
  },
};
