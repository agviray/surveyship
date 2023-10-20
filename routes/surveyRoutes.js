// *** About this surveyRoutes.js file ***
// - Contains all route handlers involved with
//   surveys.
// ***********************************************
const requireLogin = require('../middlewares/requireLogin'); // - Middlware to ensure user is logged in.

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, (req, res) => {
    // *** TODO ***
    // - 1. Include some logic that checks if user has enough
    //   credits to send out a survey.
  });
};
