const { selectArticles, updateVotes } = require("../Models/Article.model.js");

const getArticles = (req, res) => {
  selectArticles(req.params.article_id)
    .then((article) => {
      console.log(article)
      if (article) {
        res.status(200).send(article);
      } else {
        res
          .status(404)
          .send(`No article was found with id: ${req.params.article_id}`);
      }
    })
    .catch((error) => {
      next(error);
    });
};


const letsUpdateVotes = (req, res) => {
  updateVotes(req)
    .then((article) => {
      if (article) {
        res.status(200).send(article);
      } else {
        res
          .status(404)
          .send(`No article was found with id: ${req.params.article_id}`);
      }
    })
    .catch((error) => {
      next(error);
    });
};
  


module.exports = { getArticles,letsUpdateVotes};
