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
};
