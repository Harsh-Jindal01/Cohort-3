const { Router } = require("express");
const { courseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "all courses endpoint"
  })
})

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "endpoint"
  })
})

module.exports = {
  courseRouter: courseRouter
}