const jwt = require("jsonwebtoken");

const jwtToken = (id) => {
    let payload = {
      userId: id,
    };
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  };
  
  export { jwtToken };