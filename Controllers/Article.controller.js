const selectArticle = require("../Models/Article.model.js");

const getArticle = (req, res) => {
  selectArticle(req.params.article_id).then((article) => {
    if(article){
        res.status(200).send(article);
    } else{
        res.status(404).send(`No article was found with id: ${req.params.article_id}`)
    }
  });
};


module.exports = { getArticle };
