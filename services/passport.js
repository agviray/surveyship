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
      // - Create and save a new instance of a user after a user comes
      //   back from the Google OAuth flow.
      // - User instance data is saved to our MongoDB database.
      new User({
        googleId: profile.id,
      }).save();
    }
  )
);
