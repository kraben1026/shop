import { itemService } from "../services/itemService";
import { authorization } from "../middlewares/authorization";

export const itemController = {
  async sell(req, res) {
    try {
      const itemData = req.body;
      const userId = authorization(req.headers.authorization).userId;
      let response = await itemService.sell(itemData, userId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(err.message);
    }
  },
  async buy(req, res) {
    try {
      const itemId = req.body.id;
      const response = await itemService.buy(itemId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(err.message);
    }
  },
  async getItems(req, res) {
    try {
      const response = await itemService.getItems();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(err.message);
    }
  },
};
