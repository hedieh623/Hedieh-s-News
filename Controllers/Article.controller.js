const { selectArticles, updateVotes } = require("../Models/Article.model.js");

const letsUpdateVotes = (req, res) => {
  updateVotes(req.params.article_id, req.body.inc_votes) 
    .then((article) => {
      if (article) {
        res.status(200).send({ article: article });
      } else {
        res.status(404).send({
          error: `No article was found with id: ${req.params.article_id}`,
        });      }
    });
}
          
const getArticles = (req, res, next) => {
  selectArticles(req.params.article_id)
    .then((article) => {
      if (article) {
        res
        .status(200)
        .send({article:article});
      } else {
        res
          .status(404)
          .send({
            error: `No article was found with id: ${req.params.article_id}`,
          });
      }
    })
    .catch((error) => {
      next(error);
    });
};
  
module.exports = { getArticles, letsUpdateVotes };
