const express = require('express');
require('./services/passport');

// - Creates Express application
const app = express();

// - Ensure route handlers are useable by making
//   app accessible to the route handlers.
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
