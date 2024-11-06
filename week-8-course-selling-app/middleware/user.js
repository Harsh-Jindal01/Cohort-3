const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");
const { message } = require("prompt");


function userMiddleware(req, res, next){
  const token = req.header.token;
  const decode = jwt.verify(token, JWT_USER_PASSWORD)


  if (decode) {
    req.userId = decode.id;
    next()
  }else{
    res.status(403).json({
      message: "You are not signed in."
    })
  }
}

module.exports = {
  userMiddleware
}