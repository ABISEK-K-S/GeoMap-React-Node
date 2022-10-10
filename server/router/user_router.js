const connection = require("./../db_connect");
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.get("/list-users", (req, res) => {
  console.log("receiving request from client");
  let sql = "SELECT * FROM users";
  let query = connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.status(200);
    res.send(rows);
  });
});

userRouter.get("/create", (req, res) => {
  console.log("user will be created", req.query);
  let first_name = req.query.first_name ? req.query.first_name : "";
  let last_name = req.query.last_name ? req.query.last_name : "";
  let email = req.query.email ? req.query.email : "";
  let designation = req.query.designation ? req.query.designation : "";
  let dob = req.query.dob ? moment(req.query.dob).format("YYYY-MM-DD") : "";
  let active = req.query.active ? req.query.active : "";
  let user_id = req.query.user_id ? req.query.user_id : "0000";
  let sql = `INSERT INTO users(first_name, last_name, email,designation,dob,active,user_id) 
  VALUES ("${first_name}"," ${last_name}", "${email}","${designation}","${dob}",${active},"${user_id}")`;
  let query = connection.query(sql, (err, data) => {
    console.log(data, "output");
    if (err) throw err;
    res
      .status(200)
      .json({ outcome: "success", message: "User created successfully!" });
  });
});

userRouter.put("/update", (req, res) => {
  console.log("user will be updated", req.query);
  let first_name = req.query.first_name ? req.query.first_name : "";
  let last_name = req.query.last_name ? req.query.last_name : "";
  let email = req.query.email ? req.query.email : "";
  let designation = req.query.designation ? req.query.designation : "";
  let dob = req.query.dob ? moment(req.query.dob).format("YYYY-MM-DD") : "";
  let active = req.query.active ? req.query.active : "";
  let user_id = req.query.user_id ? req.query.user_id : "0000";
  let sql = `update users set first_name="${first_name}",last_name="${last_name}",
  email="${email}",designation="${designation}",dob="${dob}",active=${active} where user_id="${user_id}"`;
  console.log(sql);
  let query = connection.query(sql, (err, data) => {
    if (err) throw err;
    console.log(data, "output");
    res
      .status(200)
      .json({ outcome: "success", message: "User updated successfully!" });
  });
});

userRouter.delete("/delete", (req, res) => {
  console.log("user will be deleted", req.query.user_id);
  let user_id = req.query?.user_id ? req.query.user_id : 0;
  let sql = `delete from users where user_id="${user_id}"`;
  console.log(sql);
  let query = connection.query(sql, (err, data) => {
    console.log(data, "output");
    if (err) throw err;
    res
      .status(200)
      .json({ outcome: "success", message: "user deleted successfully" });
  });
});

module.exports = userRouter;
