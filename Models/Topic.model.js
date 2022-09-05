const db = require("../db/index.js");
const selectTopics = () => {
  return db.query("SELECT * FROM topics;").then((result) => {
    return result.rows;

  });

};

module.exports = selectTopics;