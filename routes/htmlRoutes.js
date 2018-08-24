// var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  //Load login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  //Load feed page
  app.get("/feed", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/feed.html"));
  });

  //Load profile page
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/profile.html"));
  });

  //Load index page
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/create.html"));
  });
};
