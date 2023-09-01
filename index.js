const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// - Tell mongoose to connect to our MongoDB database.
mongoose.connect(keys.mongoURI);

// - Creates Express application
const app = express();

// - Ensure route handlers are useable by making
//   app accessible to the route handlers.
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
