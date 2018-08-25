// var db = require("../models");
var path = require("path");
var authenticaton = require("authentication.js");
var passport = require("passport");
var localStrat= require("passport-local");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.post("/authenticate", passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login"
  }));

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  //Load login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  app.get("/logout", authenticaton.destroySession)

  //Load feed page
  app.get("/feed", authenticaton.isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/feed.html"));
  });

  //Load profile page
  app.get("/profile", authenticaton.isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/profile.html"));
  });

  //Load index page
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/create.html"));
  });
};
