// Dependencies
// =============================================================


module.exports = function(sequelize, DataTypes) {
// Creates a "Items" model that matches up with DB
  var Users = sequelize.define("users", {
    // the first name of the user (a string)
    firstName: DataTypes.STRING,
    // the last name of the user (a string)
    lastName: DataTypes.STRING,
    // the email of the user (a string)
    email: DataTypes.STRING,
    // the phone # of the user (a string)
    phone: DataTypes.INTEGER,
    // the password of the user (a string)
    userPassword: DataTypes.STRING,
    // the community the user is in (a string)
    community: DataTypes.STRING,
    // the image url of the user (a string)
    imageURL: DataTypes.STRING,
    
  }, {
    timestamps: false
  });

  return Users;

};



