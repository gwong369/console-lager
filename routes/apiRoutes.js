var db = require("../models");

module.exports = function (app) {
  // FEED
  // GET route for getting all of the items 
  app.get("/api/items/", function(req, res) {
    db.Items.findAll({})
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });

  //PROFILE
  // Get route for retrieving a single user from users table
  app.get("/api/users/", function(req, res) {
    db.Users.findOne({
      where: {
        id: 1
      }
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
  });

  app.get("/api/users/lender", function(req, res) {
    db.Items.findAll({
      where: {
        lender: 1
      }
    })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });

  app.get("/api/users/lendee", function(req, res) {
    db.Items.findAll({
      where: {
        lendee: 1
      }
    })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });


  // POST route for saving a new user to the database
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      userPassword: req.body.userPassword,
      community: req.body.community,
      imageURL: req.body.imageURL
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
  });

  // POST route for saving a new item to the database
  app.post("/api/items", function(req, res) {
    console.log(req.body);
    db.Items.create({
      itemName: req.body.itemName,
      lender: req.body.lender,
      lendee: req.body.lendee,
      itemDescription: req.body.itemDescription,
      category: req.body.category,
      available: req.body.available
    })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });



  // // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({where: {id: req.params.id}}).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
