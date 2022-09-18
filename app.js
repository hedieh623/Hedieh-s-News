const express = require("express");
const { invaliRequest } = require("./Controllers/invaliRequest.controller.js");

const { getTopics } = require("./Controllers/Topic.controller.js");
const { getArticles, letsUpdateVotes,getAllArticles} = require("./Controllers/Article.controller.js");
const { getUsers } = require("./Controllers/Users.controller.js");

const app = express();
app.use(express.json()); 
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticles);
app.get("/api/users", getUsers);
app.patch("/api/articles/:article_id", letsUpdateVotes);
app.get("/api/articles",getAllArticles);
app.all("*", invaliRequest); 


const server = app.listen(8080);

module.exports = server;