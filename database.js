const mysql = require("mysql");

const db = mysql.createConnection({
  host: "3.36.173.225",
  user: "root",
  port: "3306",
  password: "0000",
  database: "toy_project",
});

db.connect();

module.exports = db;
