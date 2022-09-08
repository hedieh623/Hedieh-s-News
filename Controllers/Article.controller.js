const selectArticle = require("../Models/Article.model.js");

const getArticle = (req, res) => {
  selectArticle(req.params.article_id)
    .then((article) => {
      if (article) {
<<<<<<< HEAD
        res.status(200).send(article);
=======
        res.status(200).send({article:article});
>>>>>>> 287d6a1c8cc6dc4d386f7172c7a1dacfc0bc9125
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


module.exports = { getArticle };
