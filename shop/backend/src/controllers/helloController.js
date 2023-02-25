import { helloService } from '../services/helloService';

export const helloController = {
  async get(req, res) {
    let data = await helloService.getHelloWorld();
    res.status(200).json(data);
  },
};
