const db = require("../db/connection.js");

const getNumerOfComments = (article_id) => {
  return db
    .query(`SELECT count(*) FROM comments WHERE article_id = ${article_id}`)
    .then((result) => {
      return parseInt(result.rows[0].count); 
    });
};

const getAllComments = (article_id)=>{
  return db.query(`SELECT * FROM comments WHERE article_id = ${article_id}`)
  .then((result) =>{
    return result.rows
  });
}

module.exports = { getNumerOfComments, getAllComments};
