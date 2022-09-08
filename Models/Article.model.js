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
  .query(`UPDATE articles
SET
  votes = votes +${additionalVotes} 
WHERE article_id = ${article_id}
RETURNING *;`)
}
//line 14 updates the value of votes with a new number of votes
//MY PSQL  CONDITION IS BASED ON WHERE A CONDITION IS SATISFIED , ONLY DO IT FOR WHERE APP ID = THIS

module.exports = {selectArticles,updateVotes};
