// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Items" model that matches up with DB
var Items = sequelize.define("items", {
  // the name of the lender (a string)
  lender: Sequelize.STRING,
  // the name of the lendee (a string)
  lendee: Sequelize.STRING,
  // the item's description (a string)
  itemDescription: Sequelize.STRING,
  // the item's category (a string)
  category: Sequelize.STRING,
  // the item's description (a string)
  available: Sequelize.BOOLEAN,
});


// Syncs with DB
Items.sync();

// Makes the Items Model available for other files (will also create a table)
module.exports = Items;