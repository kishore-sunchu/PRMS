const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: [true, "Email already in used"],
  },
  phone: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  emp_id:{
    type:Number,
    required:true,
  },
  hire_date: {
    type: Date,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("employees", UserSchema);
module.exports = User;
