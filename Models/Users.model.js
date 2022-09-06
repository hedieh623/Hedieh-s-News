const db = require("../db/connection.js");
const selectUsers = () => {
    console.log("query in db")
  return db.query("SELECT * FROM users;").then((result) => {
    return result.rows;
  });
};

module.exports = selectUsers;
