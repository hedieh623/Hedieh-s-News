const db = require("../db/connection.js");

const selectArticles = (article_id) => {
  return db
    .query(`SELECT * FROM articles WHERE article_id = ${article_id}`)
    .then((result) => {
      return result.rows[0];
    });
};

const updateVotes= (article_id, additionalVotes)=>{
  return db
    .query(
      `UPDATE articles
      SET
        votes = votes +${additionalVotes}
        WHERE article_id = ${article_id}
      RETURNING *;`
    )
    .then((result) => {
      return result.rows[0];
    });
}






module.exports = {selectArticles, updateVotes};
