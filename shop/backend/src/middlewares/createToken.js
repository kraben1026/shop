const jwt = require("jsonwebtoken");

const jwtToken = (id, username) => {
    let payload = {
      userId: id,
      username: username
    };
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  };
  
  export { jwtToken };