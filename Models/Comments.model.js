const db = require("../db/connection.js");
const format = require("pg-format");

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



const insertComment = (author,body,article_id)=>{
  const statement = format("INSERT INTO comments (body,votes,article_id,author) VALUES %L RETURNING *;"
         [[body,0,article_id,author]]) //values populated in the columns.
    return db.query(statement)
    .then((result) => {
      return result.rows[0]; //bc u only inserted 1 thing
    }); 
}
module.exports = { getNumerOfComments, getAllComments,insertComment};
