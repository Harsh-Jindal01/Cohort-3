import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
  email: String,
  password: String,
  name: String
})

const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectId
})

// Strct modelName = mongoose.model("collectionNameinDB, SchemaName")
const UserModel =  mongoose.model("users", User);
const TodoModel =  mongoose.model("todos", Todo);