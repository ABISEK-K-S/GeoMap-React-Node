const express = require("express");
const bodyParser = require("body-parser");
const connection = require("../db_connect");

const companyRouter = express.Router();
companyRouter.use(bodyParser.json());

companyRouter.get("/list-company", (req, res) => {
  let sql = "SELECT * FROM companies";
  let query = connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.status(200).json(rows);
  });
});

companyRouter.get("/create", (req, res) => {
  console.log("company will be created", req.query);
  let COMPANY_ID = req.query.COMPANY_ID ? req.query.COMPANY_ID : "";
  let COMPANY_NAME = req.query.COMPANY_NAME ? req.query.COMPANY_NAME : "";
  let COORDINATES = req.query.COORDINATES ? req.query.COORDINATES : "";
  let ADDRESS = req.query.ADDRESS ? req.query.ADDRESS : "";
  let sql = `INSERT INTO companies(COMPANY_ID, COMPANY_NAME, COORDINATES,ADDRESS) 
  VALUES ("${COMPANY_ID}"," ${COMPANY_NAME}", "${COORDINATES}","${ADDRESS}")`;
  console.log(sql);
  let query = connection.query(sql, (err, data) => {
    console.log(data, "output");
    if (err) throw err;
    res
      .status(200)
      .json({ outcome: "success", message: "Company created successfully!" });
  });
});

companyRouter.put("/update", (req, res) => {
  console.log("company will be updated", req.query);
  let COMPANY_ID = req.query.COMPANY_ID ? req.query.COMPANY_ID : "";
  let COMPANY_NAME = req.query.COMPANY_NAME ? req.query.COMPANY_NAME : "";
  let COORDINATES = req.query.COORDINATES ? req.query.COORDINATES : "";
  let ADDRESS = req.query.ADDRESS ? req.query.ADDRESS : "";

  let sql = `update companies set COMPANY_ID="${COMPANY_ID}",COMPANY_NAME="${COMPANY_NAME}",
  COORDINATES="${COORDINATES}", ADDRESS="${ADDRESS}" where COMPANY_ID="${COMPANY_ID}"`;
  console.log(sql);

  let query = connection.query(sql, (err, data) => {
    console.log(data, "output");
    if (err) throw err;
    res
      .status(200)
      .json({ outcome: "success", message: "Company updated successfully!" });
  });
});
companyRouter.delete("/remove-user", (req, res) => {
  console.log("user will be removed from the company", req.query);
  let COMPANY_ID = req.query?.company_id ? req.query.company_id : 0;
  let USER_LIST = req.query?.user_list ? req.query.user_list : 0;
  let USER_ID = req.query?.user_id ? req.query.user_id : 0;
  let array = [];
  const PASE_DATA = Object.entries(JSON.parse(USER_LIST)).map((data) => {
    if (data[1] !== USER_ID) {
      array.push(`"${data[1]}"`);
    }
  });
  let sql = `update companies set users='[${array}]' where COMPANY_ID="${COMPANY_ID}"`;
  console.log(sql);
  let query = connection.query(sql, (err, data) => {
    console.log(data, "output");
    if (err) throw err;
    res
      .status(200)
      .json({ outcome: "success", message: "User removed from the company!" });
  });
});

companyRouter.delete("/delete", (req, res) => {
  console.log("company will be deleted");
  let COMPANY_ID = req.query?.COMPANY_ID ? req.query.COMPANY_ID : 0;
  let sql = `delete from companies where COMPANY_ID="${COMPANY_ID}"`;
  console.log(sql);
  let query = connection.query(sql, (err, data) => {
    console.log(data, "output");
    if (err) throw err;
    res
      .status(200)
      .json({ outcome: "success", message: "Company deleted successfully!" });
  });
});

module.exports = companyRouter;
