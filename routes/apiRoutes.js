var db = require("../models");

module.exports = function (app) {
  // FEED
  // GET route for getting all of the items 
  app.get("/api/items", function (req, res) {
    db.items.findAll({})
      .then(function (dbitems) {
        res.json(dbitems);
      });
  });

  //PROFILE
  // Get route for retrieving a single user from users table
  app.get("/api/users", function (req, res) {
    db.users.findOne({
      where: {
        id: 1
      }
    })
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  app.get("/api/items", function (req, res) {
    db.items.findOne({
      where: {
        id: 1
      }
    })
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  app.get("/api/users/lender", function (req, res) {
    db.items.findAll({
      where: {
        lender: 1
      }
    })
      .then(function (dbitems) {
        res.json(dbitems);
      });
  });

  app.get("/api/users/lendee", function (req, res) {
    db.items.findAll({
      where: {
        lendee: 1
      }
    })
      .then(function (dbitems) {
        res.json(dbitems);
      });
  });


  // POST route for saving a new user to the database
  app.post("/api/users", function (req, res) {
    console.log(req.body);
    db.users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      userPassword: req.body.userPassword,
      community: req.body.community,
      imageURL: req.body.imageURL
    })
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  // POST route for saving a new item to the database
  app.post("/api/items", function (req, res) {
    console.log(req.body);
    db.items.create({
      itemName: req.body.itemName,
      lender: req.body.lender,
      lendee: req.body.lendee,
      itemDescription: req.body.itemDescription,
      category: req.body.category,
      available: req.body.available
    })
      .then(function (dbitems) {
        res.json(dbitems);
      });
  });

  // app.post("/api/items", function(req, res) {
  //   db.items.create(req.body).then(function(dbItems) {
  //     res.json(dbItems);
  //   });
  // });



  // // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({where: {id: req.params.id}}).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
