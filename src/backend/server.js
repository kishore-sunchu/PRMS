const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongo = require("./connection");
const User = require("./modal/User");

const port = 5000;
const server = express();
server.use(cors());
// server.use(bodyParser.urlencoded());
// server.use(bodyParser.json());
server.use(bodyParser());
connectToMongo();

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.post("/auth", async (req, res) => {
  const userId = req.body.fname;
  const userPassword = req.body.password;
  if (userId === "admin" && userPassword === "admin") {
    res.json({ status: "true", fname: "Admin", user: "Admin" });
  } else {
    const user = await User.findOne({
      $and: [{ fname: userId }, { password: userPassword }],
    });
    if (user !== null) {
      res
        .status(200)
        .json({
          status: "true",
          fname: user.fname,
          user: "Employee",
          id: user.emp_id,
        });
    } else {
      console.log("sended false");
      res.send(false);
    }
  }
});

server.post("/countUser", async (req, res) => {
  const count = await User.countDocuments();
  const totalSalary = await User.aggregate([
    { $group: { _id: null, total_salary: { $sum: "$salary" } } },
  ]);
  const salaryCount = totalSalary[0].total_salary;
  res.status(200).json({ count: count, salary: salaryCount });
});

server.post("/employees", async (req, res) => {
  const employees = await User.find();
  res.send(employees);
  // console.log(employees);
});

server.post("/add", async (req, res) => {
  const user = new User();
  user.fname = req.body.fname;
  user.lname = req.body.lname;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.dob = req.body.dob;
  user.gender = req.body.gender;
  user.emp_id = req.body.emp_id;
  user.hire_date = req.body.hire_date;
  user.job_title = req.body.job_title;
  user.salary = req.body.salary;
  user.password = req.body.password;
  const data = await user.save();
  if (data._id !== "") {
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});

server.post("/employeeData", async (req, res) => {
  const emp_id = req.body.emp_id;
  const user = await User.findOne({ emp_id: emp_id });
  // console.log(user);
  if (user !== null) {
    res.send(user);
  } else {
    res.send(false);
  }
});

server.post("/update", async (req, res) => {
  const emp_id = req.body.emp_id;
  const user = await User.findOne({ emp_id: emp_id });
  if (user !== null) {
    const data = await user.updateOne({
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });
    if (data !== null) {
      res.json({ status: true });
    } else {
      res.json({ status: false, reason: "something went wrong" });
    }
  } else {
    res.json({ status: false, reason: "Employee Does Not Exist" });
  }
});

server.post("/delete", async (req, res) => {
  const emp_id = req.body.emp_id;
  const user = await User.findOne({ emp_id: emp_id });
  const data = await user.deleteOne();
  if (data._id !== "") {
    res.json({ status: true });
  } else {
    res.json({ status: false, reason: "Employee Does Not Exist" });
  }
});
