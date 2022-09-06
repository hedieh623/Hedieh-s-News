const selectArticle = require("../Models/article.model.js");

const getArticle = (req, res) => {
  selectArticle().then((topics) => {
    res.status(200).send(topics);
  });
};

module.exports = { getArticle };
