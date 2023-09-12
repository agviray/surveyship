// *** About this authRoutes.js file ***
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
  app.get('/auth/google/callback', passport.authenticate('google'));

  // - Log user out of application when they visit provided string route.
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // - Route handler to handle case where user visits string route shown below.
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
