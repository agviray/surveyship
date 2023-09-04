// - Houses all Passport.js configuration
// ****************************************
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// - Create a reference to the model class that's used for a user.
const User = mongoose.model('users');

// - Takes in a user model and generates an identifying piece of info (user.id) to be
//   passed back to client in form of a cookie.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // - Here, the user returns from the Google OAuth flow with their
      //   Google ID in hand.
      // - The idea here is to return a user record--but before doing so,
      //   a check needs to occur to see if the user has an existing record in
      //   the Mongo database, or if they are new (which if new, a new record must be created
      //   and added to the Mongo database).
      // - Ultimately, a user record will be returned whether it's a new user record or
      //   an existing one.
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // - We already have a record with the given profile ID, so
          //   we can proceed to do something with our existing user.
          done(null, existingUser);
        } else {
          //  - We don't have a user record with this ID, so make
          //    a new record and save it in the database.
          // - Now with this new user record created and saved, we can proceed to do
          //   something with it.
          new User({
            googleId: profile.id,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
