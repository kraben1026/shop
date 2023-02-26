import { helloService } from "../services/helloService";
import { loginService } from "../services/loginService";
export const helloController = {
  async get(req, res) {
    let data = await helloService.getHelloWorld();
    res.status(200).json(data);
  },
};
