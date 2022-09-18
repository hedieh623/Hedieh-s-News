const comments = require("../db/data/test-data/comments.js");
const {getAllComments } = require("../Models/Comments.model.js");

const getComments = (req, res, next) => {
  const article_id = req.params.article_id;
  if (!isNaN(article_id)) {
    return getAllComments(article_id)
    .then((comments) => {
            

      res.status(200).send({
           comments : comments
          });
    
    
  })
};
}
module.exports = {getComments};