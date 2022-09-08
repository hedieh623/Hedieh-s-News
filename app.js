const express = require("express");
const {all} = require("./Controllers/All.controller.js")

const { getTopics } = require("./Controllers/Topic.controller.js");
const { getArticle } = require("./Controllers/Article.controller.js");

const app = express();
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticle);
app.all("*",all); //when calling this all request, it uses this function 


// our app.js file starts the server and says oh this is the request, tell such and such a controller to handle it.

const server = app.listen(8080)

module.exports = server;
