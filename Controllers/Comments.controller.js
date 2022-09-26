const comments = require("../db/data/test-data/comments.js");
const {getAllComments } = require("../Models/Comments.model.js");
const {someName} = require("../Models/Comments.model.js");

const getComments = (req, res, next) => {
  const article_id = req.params.article_id;
  if (!isNaN(article_id)) {
    return getAllComments(article_id)
      .then((comments) => {
        if (comments.length !== 0) {
          res.status(200).send({
            comments: comments,
          });
        } else {
          res.status(404).send({
            error: `No comment was found with id: ${req.params.article_id}`,
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
}

const anotherSomeName = (req,res,next)=>{
  const article_id = req.params.article_id;
  


}


module.exports = {getComments,anotherSomeName};
//article id that does exist 
//article id that doesnt exist