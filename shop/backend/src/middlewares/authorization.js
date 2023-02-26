const jwt = require('jsonwebtoken');
require('dotenv').config({path: "../../.env"});

export const authorization = (authorizationHeader) =>{
    const token = authorizationHeader.split('.')[1];
    const pw = process.env.ACCESS_TOKEN_SECRET;
    const decoded = {};
    try {
        decoded = jwt.verify(token, pw)
    } catch (error) {
        throw new Error("Not authorized (bad token")
    }
    return decoded
}