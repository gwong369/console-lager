// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {
// Creates a "Items" model that matches up with DB
  var Items = sequelize.define("items", {
    itemName: DataTypes.STRING,
    // the name of the lender (a string)
    lender: DataTypes.STRING,
    // the name of the lendee (a string)
    lendee: DataTypes.STRING,
    // the item's description (a string)
    itemDescription: DataTypes.STRING,
    // the item's category (a string)
    category: DataTypes.STRING,
    // the item's description (a string)
    available: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });

  return Items;

};
