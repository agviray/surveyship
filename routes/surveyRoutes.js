// *** About this surveyRoutes.js file ***
// - Contains all route handlers involved with
//   surveys.
// ***********************************************

// - Custom middlware to ensure user is logged in.
const requireLogin = require('../middlewares/requireLogin');
// - Custom middlware to ensure user has enough credits to send a survey.
const requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    // - Do something when user makes POST request to '/api/surveys'.
  });
};
