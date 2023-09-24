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

// - Takes id from cookie (this id refers to the id that was previously passed to the client
//   in form of a cookie), and turns it back into a user model.
// - id is the same value as the user.id value from the passport.serializeUser(...) step.
passport.deserializeUser((id, done) => {
  // - Search for the desired user within all users in our Mongo database.
  // - Once desired user found, call the done(...) method to return a user model.
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // - Here, the user returns from the Google OAuth flow with their
      //   Google ID in hand.
      // - The idea here is to return a user record--but before doing so,
      //   a check needs to occur to see if the user has an existing record in
      //   the Mongo database, or if they are new (which if new, a new record must be created
      //   and added to the Mongo database).
      // - Ultimately, a user record will be returned whether it's a new user record or
      //   an existing one.
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // - We already have a record with the given profile ID, so
        //   we can proceed to do something with our existing user.
        return done(null, existingUser);
      }
      //  - We don't have a user record with this ID, so make
      //    a new record and save it in the database.
      // - Now with this new user record created and saved, we can proceed to do
      //   something with it.
      const user = await new User({
        googleId: profile.id,
      }).save();
      done(null, user);
    }
  )
);
