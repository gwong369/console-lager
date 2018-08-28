// var db = require("../models");
var path = require("path");
var authenticaton = require("./athentication");
var passport = require("passport");
var localStrat= require("passport-local");
var passportConfig = require("../config/passport");

module.exports = function(app, passport) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.post("/signup", passport.authenticate("local-signup",  { 
    successRedirect: "/login",
    failureRedirect: "/create"}
  ));

  app.post("/authenticate", passport.authenticate("local-login", {
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

  app.get("/logout", authenticaton.destroySession);

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
