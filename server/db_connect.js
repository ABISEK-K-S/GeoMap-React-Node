const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "abisek",
});

connection.connect(function (error) {
  if (!!error) console.log(error);
  else console.log("Database Connected!");
});

module.exports = connection;
