
const express = require("express");
const {getTopics} = require("./Controllers/Topic.controller.js");

const app = express();
app.get("/api/topics", getTopics);

const server = app.listen(8080)

module.exports = server;
