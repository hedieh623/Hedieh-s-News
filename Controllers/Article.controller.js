const articles = require("../db/data/test-data/articles.js");
const { selectArticles, updateVotes, getAllArticlesAndCommentInfo} = require("../Models/Article.model.js");
const { getNumerOfComments} = require("../Models/Comments.model.js");


const letsUpdateVotes = (req, res) => {
  const article_id = req.params.article_id;
  const additionalVotes = req.body.inc_votes;
  if (!isNaN(article_id) && !isNaN(additionalVotes)) {

    updateVotes(article_id, additionalVotes)
    .then((article) => {
      if (article) {
        res.status(200).send({ article: article });
      } else {
        res.status(404).send({
          error: `No article was found with id: ${req.params.article_id}`,
        });
      }
    });
  } else if (isNaN(article_id)) {
    res.status(400).send({
      error: `article id must be a number`,
    });
  } else {
    res.status(400).send({
      error: `inc_votes must be a number`,
    });
  }
};

const getArticles = (req, res, next) => {
  const article_id = req.params.article_id; 
  if (!isNaN(article_id)) {
    Promise.all([selectArticles(article_id), getNumerOfComments(article_id)])
      .then(([article, commentCount]) => {
        if (article) {
          article.comment_count = commentCount; 
          res.status(200).send({
            article: article
          });
        } else {
          res.status(404).send({
            error: `No article was found with id: ${req.params.article_id}`,
          });
        }
      })
      .catch((error) => {
        next(error);
      });
  } else {
    res.status(400).send({
      error: `article id must be a number`,
    });
  }
};



const getAllArticles = (req, res, next) => {
  return getAllArticlesAndCommentInfo()
    .then((allarticles)=> {
      const topic = req.query.topic
      if(topic){
        res.status(200).send({
          articles: allarticles.filter(article=>article.topic== topic)

          })
        }else{ 
           res.status(200).send({
             articles: allarticles
           });

        }
      })
    .catch((error) => {
      next(error);
    });
};


;

















module.exports = { getArticles, letsUpdateVotes,getAllArticles };


