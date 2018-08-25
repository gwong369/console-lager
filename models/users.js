// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Items" model that matches up with DB
var Items = sequelize.define("items", {
  // the first name of the user (a string)
  firstName: Sequelize.STRING,
  // the last name of the user (a string)
  lastName: Sequelize.STRING,
  // the email of the user (a string)
  email: Sequelize.STRING,
  // the phone # of the user (a string)
  phone: Sequelize.INTEGER,
  // the password of the user (a string)
  userPassword: Sequelize.STRING,
  // the community the user is in (a string)
  community: Sequelize.STRING,
  // the image url of the user (a string)
  imageURL: Sequelize.STRING,
  
});


// Syncs with DB
Items.sync();
