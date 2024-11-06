const mongoose = require("mongoose");
// use dotev to make connections to the database.
console.log("connect to data base");

// Before running this connect line we first conncet all the model at line no. 39 to their respective files. 
mongoose.connect("mongodb+srv://harshjindal955:76xW5T60dcDBK14M@cluster0.szsb7.mongodb.net/coursera-app")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
  firstName: String,
  lastName: String
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  ImageURL: String,
  creatorId: ObjectId,
});

const adminSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
  firstName: String,
  lastName: String
});

// ***Add references here (learnit from the week-8 offline video named as mongoDB-deep-dive)***

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", courseSchema);
const adminModel = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  courseModel,
  adminModel,
  purchaseModel
}