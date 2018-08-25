var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    db.Users.find({where: {id: user.id}}).success(function(user) {
        done(null, user);
    }).error(function(err) {
        done (err, null);
    });
});

passport.use(new LocalStrategy(
    function(email, password, done) {
        db.Users.find({where: {email: email}}).success(function(user) {
            passwd = user ? user.userPassword : ''
            isMatch = db.User.validPassword(password, passwd, done, user)
        });
    }
));