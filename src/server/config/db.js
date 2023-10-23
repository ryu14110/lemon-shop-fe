const mysql = require('mysql');
const db = mysql.createPool({
  // host: "localhost",
  // user: "root",
  // password: "0000",
  // database: "sticky_lemon",
  // port: 3306,
  host: 'database-1.crsko3wmlgbz.ap-northeast-2.rds.amazonaws.com',
  user: 'gyeongjin',
  password: 'REACT123!',
  database: 'ICT_TEAM',
  port: 3306,
});

module.exports = db;
