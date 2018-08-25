var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // POST route for saving a new user to the database
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.Post.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      userPassword: req.body.userPassword,
      community: req.body.community
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new item to the database
  app.post("/api/items", function(req, res) {
    console.log(req.body);
    db.Post.create({
      itemName: req.body.itemName,
      lender: req.body.lender,
      itemDescription: req.body.itemDescription,
      category: req.body.category,
      available: req.body.available,
      imageURL: req.body.imageURL,
      community: req.body.community
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({where: {id: req.params.id}}).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
