const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

// - Tell mongoose to connect to our MongoDB database.
mongoose.connect(keys.mongoURI);

// - Creates Express application
const app = express();

// - Express middlewares are wired to Express via app.use(...) call.
// - bodyParser middleware parses incoming requests sent to Express.
app.use(bodyParser.json());
// - cookieSession middlware enables cookie usage with Express.
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
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// - Configuration to ensure that Express behaves correctly when it's in a production environment.
// - Will only run when in production (in Heroku)
if (process.env.NODE_ENV === 'production') {
  // - Express will serve production assets, ie main.js file, or main.css file.
  app.use(express.static('client/build'));

  // - Express serves up index.html file if it doesn't recognize the route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
