const express = require("express");
const { getTopics } = require("./Controllers/Topic.controller.js");
const { getArticle } = require("./Controllers/Article.controller.js");
const { getUsers} = require("./Controllers/Users.controller.js");

const app = express();
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticle);
app.get("/api/users",getUsers)

app.listen(8080);

module.exports = app;
