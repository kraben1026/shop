import express from "express";
import cors from "cors";
import { userController } from "../controllers/userController";
import { loginController } from "../controllers/loginController";
import { itemController } from "../controllers/itemController";

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get("/getUsers", userController.get);
router.get("/getItems", itemController.getItems);
router.post("/login", loginController.login);
router.post("/sell", itemController.sell);
router.delete("/buy", itemController.buy);

export default router;
