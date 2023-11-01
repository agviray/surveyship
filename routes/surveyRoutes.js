// *** About this surveyRoutes.js file ***
// - Contains all route handlers involved with
//   surveys.
// ***********************************************
const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
// - Custom middlware to ensure user is logged in.
const requireLogin = require('../middlewares/requireLogin');
// - Custom middlware to ensure user has enough credits to send a survey.
const requireCredits = require('../middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Mailer = require('../services/Mailer');

module.exports = (app) => {
  // - Send survey recipients to a Thank You page in our app, when they
  //   click on a survey link in their email.
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  // - Using Sendgrid's webhook to get recipient click data on a given survey.
  app.post('/api/surveys/webhooks', (req, res) => {
    // - Only extract click event that's related to the recipient's response.
    // - Also prevents click event registration of duplicate clicks on a survey.
    const p = new Path('/api/surveys/:surveyId/:choice');
    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {
            email: email,
            surveyId: match.surveyId,
            choice: match.choice,
          };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .value();

    console.log(events);
    res.send({});
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
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
      req.user.credits -= 1; // - Subtract credit from total credits after email sent.
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
