const express = require('express');

// - Creates Express application
const app = express();

// - Creates route handler and associates it with the given route, '/'.
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// - Regarding process.env.PORT
//   - process.env.PORT will only have a value when app is running in
//     production (ie Heroku is running our app).
//   - When Heroku runs app, Heroku will send some port-related configuration that
//     essentially tells our app what port to listen to, when listening for HTTP traffic.
//   - Heroku sends the port config via environment variables, and our app must listen
//     to that port.
//   - When our app is running, PORT's value will be whatever Heroku designated to us,
//     which will be the value of process.env.PORT.

// - Regarding || 5000
//   - PORT will have a value when our app is running, but not when we are developing.
//   - Therefore, we have to add the || 5000 to handle development scenarios.
//   - When we are developing, our app will listen for HTTP traffic on port 5000.
//   - When we are developing, PORT's value will be 5000 (aka port 5000).

const PORT = process.env.PORT || 5000;
app.listen(PORT);
