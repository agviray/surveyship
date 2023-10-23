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
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Mailer = require('../services/Mailer');
module.exports = (app) => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
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

    // - Send emails here!
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send(); // - Send emails out to recipients.
      await survey.save(); // - Save survey to database after emails sent.
      req.user.credtis -= 1; // - Subtract credit from total credits after email sent.
      // - Initial user to have value of updated user.
      // - Must set to variable in order to have a reference to
      //   updated user.
      const user = await req.user.save();
      // - Send back updated version of user model.
      // - Do this to have Header credits to be updated.
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
