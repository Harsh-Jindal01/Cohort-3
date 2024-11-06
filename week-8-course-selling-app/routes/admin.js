const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config")
adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email,
    password,
    firstName,
    lastName
  })
  res.json({
    message: "signup succeded"
  })
})

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email,
    password
  })

  if(admin){
    const token = jwt.sign({
      id: admin._id
    }, JWT_ADMIN_PASSWORD);
    
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

// adminRouter.use(adminMiddleware);

adminRouter.post("/course", (req, res) => {
  res.json({
    message: "courses endpoint"
  })
})

adminRouter.put("/course", (req, res) => {
  res.json({
    message: "endpoint"
  })
})

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "bulk courses endpoint"
  })
})

module.exports = {
  adminRouter: adminRouter
}