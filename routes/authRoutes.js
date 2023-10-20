// *** About this authRoutes.js file ***
// - Contains all route handlers involved with
//   authenticating the user.
// ***********************************************
const passport = require('passport');

module.exports = (app) => {
  // - Route handler to handle case where user is sent to/visits '/auth/google'
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  // - Route handler to handle case where user is sent to/visits '/auth/google/callback'
  // - Redirect user to /surveys when they're successfully logged into app.
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // - Log user out of application when they visit provided string route.
  // - Redirect user to / path when user logs out of app.
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // - Route handler to handle case where user visits string route shown below.
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
