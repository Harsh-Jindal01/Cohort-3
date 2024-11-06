const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");


adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup endpoint"
  })
})

adminRouter.post("/login", (req, res) => {
  res.json({
    message: "login endpoint"
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