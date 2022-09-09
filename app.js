const express = require("express");
const { invaliRequest } = require("./Controllers/invaliRequest.controller.js");

const { getTopics } = require("./Controllers/Topic.controller.js");
const { getArticles, letsUpdateVotes} = require("./Controllers/Article.controller.js");
const { getUsers } = require("./Controllers/Users.controller.js");

const app = express();
app.use(express.json()); 
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticles);
app.get("/api/users", getUsers);
app.patch("/api/articles/:article_id", letsUpdateVotes);
app.all("*", invaliRequest); //when calling this all request, it uses this function
// our app.js file starts the server and says oh this is the request, tell such and such a controller to handle it.

const server = app.listen(8080);

module.exports = server;