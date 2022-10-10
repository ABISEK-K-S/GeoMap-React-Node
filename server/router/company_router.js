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
  let sql = `INSERT INTO companies(COMPANY_ID, COMPANY_NAME, COORDINATES) 
  VALUES ("${COMPANY_ID}"," ${COMPANY_NAME}", "${COORDINATES}")`;
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

  let sql = `update companies set COMPANY_ID="${COMPANY_ID}",COMPANY_NAME="${COMPANY_NAME}",
  COORDINATES="${COORDINATES}" where COMPANY_ID="${COMPANY_ID}"`;
  console.log(sql);

  let query = connection.query(sql, (err, data) => {
    console.log(data, "output");
    if (err) throw err;
    res
      .status(200)
      .json({ outcome: "success", message: "Company updated successfully!" });
  });
});

// companyRouter.get("/modify-company/", (req, res) => {
//   //true false
//   console.log("use account will be modified");
//   let status = "add";
//   let COMPANY_ID = req.body?.COMPANY_ID ? req.body.COMPANY_ID : 0;
//   let USER_ID = req.body?.USER_ID ? req.body.USER_ID : 0;
//   COMPANY_ID = "S78547";
//   USER_ID = "5448";
//   status = "delete";

//   if (status === "add") {
//   } else {
//     const searchQuery = `select users from companies where COMPANY_ID="${COMPANY_ID}"`;
//     let query = connection.query(searchQuery, (err, result, data) => {
//       var array = JSON.parse(result[0].users);
//       const verifyID = array.find((data) => data == USER_ID);
//       if (verifyID) {
//         console.log("User ID found", USER_ID, array);
//         array.splice(array.indexOf(`${USER_ID}`), 1);
//         array.forEach((data) => `"${data}"`);
//         console.log(array, "arrya");
//         let abisek = () => {
//           return array.map((i) => {
//             return i;
//           });
//         };
//         // let sql = `UPDATE company SET users=[${array}] where COMPANY_ID="${COMPANY_ID}"`;
//         let sql = `UPDATE company SET users=${[
//           abisek(),
//         ]} where COMPANY_ID="${COMPANY_ID}"`;

//         console.log(sql);
//         let query = connection.query(sql, (err, data) => {
//           console.log(data, "output");
//           if (err) throw err;
//           res.status(200).send({ outcome: "success" });
//         });
//       } else {
//         console.log("id not found");
//         res.send(`${USER_ID} is not found`);
//       }
//       // res.send(result);
//     });
//   }
// });

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
