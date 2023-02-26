import { loginService } from "../services/loginService";

export const loginController = {
  async login(req, res) {
    const loginData = req.body;
    try {
      const loginRes = await loginService.login(loginData);
      res.status(200).json(loginRes);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
