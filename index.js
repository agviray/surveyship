const express = require('express');

// - Creates Express application
const app = express();

// - Creates route handler and associates it with the given route, '/'.
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
