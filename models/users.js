module.exports = function(sequelize, Sequelize) {
// Creates a "Users" model that matches up with DB
  var Users = sequelize.define("users", {
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

  return Users;

};



