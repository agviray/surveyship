// *** About this surveyRoutes.js file ***
// - Contains all route handlers involved with
//   surveys.
// ***********************************************
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
// - Custom middlware to ensure user is logged in.
const requireLogin = require('../middlewares/requireLogin');
// - Custom middlware to ensure user has enough credits to send a survey.
const requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    // ****************************************************************************
    // ****************************************************************************
    // *** IMPORTANT ***
    // - Note that there are currently no values for the properties
    //   shown in the object argument of new Survey({...}).
    // - The frontend isn't making any requests to '/api/surveys' yet, so these
    //   properties (title, subject, body, etc) will not have any values yet.
    // - This is only to show what properties we are going to need/use
    //   when we design our backend server.
    // ****************************************************************************
    // ****************************************************************************
    const { title, subject, body, recipients } = req.body;
    // - Create instance of a survey using our Survey model class.
    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(',').map((email) => {
        return {
          email: email.trim(),
        };
      }),
      _user: req.user.id,
      dateSent: Date.now(),
    });
  });
};
