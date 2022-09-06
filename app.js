
const express = require("express");
const {getTopics} = require("./Controllers/Topic.controller.js");
const { getArticle } = require("./Controllers/Topic.controller.js");




const app = express();
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", function (req, res) {
  res.send("tagId is set to " + req.params.tagId);
});


app.listen(8080)

module.exports = app;
