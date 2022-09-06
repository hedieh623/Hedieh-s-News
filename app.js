
const express = require("express");
const {getTopics} = require("./Controllers/Topic.controller.js");

const app = express();
app.get("/api/topics", getTopics);

app.listen(8080)

module.exports = app;
