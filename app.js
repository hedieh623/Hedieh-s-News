const express = require("express");
const { getTopics } = require("./Controllers/Topic.controller.js");
const { getArticle } = require("./Controllers/Article.controller.js");

const app = express();
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticle);

const server = app.listen(8080)

module.exports = server;
