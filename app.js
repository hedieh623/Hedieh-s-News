const express = require("express");
const {all} = require("./Controllers/All.controller.js")

const { getTopics } = require("./Controllers/Topic.controller.js");
const { getArticle } = require("./Controllers/Article.controller.js");
<<<<<<< HEAD
const { getUsers} = require("./Controllers/Users.controller.js");
=======
>>>>>>> 287d6a1c8cc6dc4d386f7172c7a1dacfc0bc9125

const app = express();
app.get("/api/topics", getTopics);
app.get("/api/articles/:article_id", getArticle);
<<<<<<< HEAD
app.get("/api/users", getUsers);
app.all("*",all); //when calling this all request, it uses this function 
// our app.js file starts the server and says oh this is the request, tell such and such a controller to handle it.
=======
app.all("*",all); //when calling this all request, it uses this function 


// our app.js file starts the server and says oh this is the request, tell such and such a controller to handle it.

>>>>>>> 287d6a1c8cc6dc4d386f7172c7a1dacfc0bc9125
const server = app.listen(8080)

module.exports = server;
