const express = require("express");
const app = express();


app.use(express.json);

app.post("/signup", (req, res) => {
  res.json({
    message: "signup endpoint"
  })
})

app.post("/login", (req, res) => {
  res.json({
    message: "login endpoint"
  })
})

app.get("/user/purchases", (req, res) => {
  res.json({
    message: "purchased courses endpoint"
  })
})

app.get("/courses", (req, res) => {
  res.json({
    message: "all courses endpoint"
  })
})

app.get("/course/purchase", (req, res) => {
  res.json({
    message: " endpoint"
  })
})


app.listen(3000);