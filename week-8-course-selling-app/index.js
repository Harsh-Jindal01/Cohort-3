const express = require("express");
const app = express();


app.use(express.json);

app.post("signup", (req, res) => {

})

app.post("login", (req, res) => {

})

app.post("purchase-courses", (req, res) => {

})

app.get("courses", (req, res) => {

})

app.get("purchased-courses", (req, res) => {

})


app.listen(3000);