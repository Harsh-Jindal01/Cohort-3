const { Router } = require("express");
// this Router is now become a Router function.

const userRouter = Router();

const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config")


// importing db connections from db.js file.

const { userModel } = require("../db");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await userModel.create({
    email,
    password,
    firstName,
    lastName
  })
  res.json({
    message: "signup succeded"
  })
})

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModule.findOne({
    email,
    password
  })

  if(user){
    const token = jwt.sign({
      id: user._id
    }, JWT_USER_PASSWORD);
    
    // Do cookies logic

    res.json({
      token
    })
  }else{
    res.status(403).json({
      message: "Invalid Credentials"
    })
  }
  res.json({
    message: "login succeded"
  })
})

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "purchased courses endpoint"
  })
})

module.exports = {
  userRouter: userRouter
}