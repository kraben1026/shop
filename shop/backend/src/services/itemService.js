import { sell } from "../models/sell";
import { buyItem } from "../models/buyItem";
import { getItems } from "../models/getItems";

export const itemService = {
  async sell(itemData, userId) {
    const response = await sell.sell(itemData, userId);
    return response;
  },
  async buy(itemId) {
    const response = await buyItem.buy(itemId);
    return response;
  },
  async getItems() {
    const response = await getItems.getItems();
    return response;
  },
};
