import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://harsh:123@cluster0.5ektt.mongodb.net/brainly")

const UserSchema = new Schema({
  username: {type: String, unique: true},
  password: String
})

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
  userId: { type: mongoose.Types.ObjectId, ref: 'User', require: true }
})

export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);