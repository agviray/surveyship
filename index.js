const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// - Tell mongoose to connect to our MongoDB database.
mongoose.connect(keys.mongoURI);

// - Creates Express application
const app = express();

// - Enable cookie usage with Express.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// - Tell passport to make use of cookies in order to keep track of
//   our "user authentication state".
app.use(passport.initialize());
app.use(passport.session());

// - Ensure route handlers are useable by making
//   app accessible to the route handlers.
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
