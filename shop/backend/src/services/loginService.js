import { loginModel } from "../models/login";
import { jwtToken } from "../middlewares/createToken";
require("dotenv").config();

const validateLogin = (username, password) => {
    return username.length > 0 && password.length > 0;
  };
  
  export const loginService = {
    async login(loginData) {
        const isUser = async () =>{
            const { username, password } = loginData;
            if (!validateLogin(username, password)) {
              throw new Error("Invalid login data");
            }
            const response = await loginModel.login({ username, password });
            if (response.length === 0) {
              throw new Error("Wrong credentials");
            }
            let id = response[0].id;
            const token = jwtToken(id);
            return {
              status: 200,
              token: token,
            };
        }
        return isUser()
    },
  };
