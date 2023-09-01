// - Houses all Passport.js configuration
// ****************************************
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// - Create a reference to the model class that's used for a user.
const User = mongoose.model('users');

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
      // - Now we check to see if their Google ID exists in the database.
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // - We already have a record with the given profile ID, so
          //   we can proceed to do something with our existing user.
        } else {
          //  - We don't have a user record with this ID, so make
          //    a new record and save it in the database!
          new User({
            googleId: profile.id,
          }).save();
        }
      });
    }
  )
);
