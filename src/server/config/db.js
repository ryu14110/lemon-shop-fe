var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "react_project", //name of my project
});

module.exports = db;
