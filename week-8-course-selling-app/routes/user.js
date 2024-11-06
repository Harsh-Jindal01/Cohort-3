const { Router } = require("express");
// this Router is now become a Router function.
const userRouter = Router();
const { userModel } = require("../db");

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup endpoint"
  })
})

userRouter.post("/login", (req, res) => {
  res.json({
    message: "login endpoint"
  })
})

userRouter.get("/user/purchases", (req, res) => {
  res.json({
    message: "purchased courses endpoint"
  })
})

module.exports = {
  userRouter: userRouter
}