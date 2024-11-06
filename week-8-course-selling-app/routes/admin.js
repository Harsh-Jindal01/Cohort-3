const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require("../middleware/admin");
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

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const {title, description, imageURL, price} = req.body;

  const course = await courseModel.create({
    title, description, imageURL, price, creatorId: adminId
  })

  res.json({
    message: "courses created",
    courseId: course._id
  })
})

adminRouter.put("/course",adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const {title, description, imageURL, price} = req.body;

  const course = await courseModel.updateOne({
    _id: creatorId,
    creatorId: adminId
  },{
    title, description, imageURL, price
  })

  res.json({
    message: "courses updated",
    courseId: course._id
  })
})

adminRouter.get("/course/bulk",adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const course = await courseModel.find({
    creatorId: adminId
  });

  res.json({
    message: "courses updated",
    courseId: course._id
  })
})

module.exports = {
  adminRouter: adminRouter
}