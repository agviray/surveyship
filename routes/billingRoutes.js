const keys = require('../config/keys');
// - Must require (aka "import") stripe library by following syntax specifically mentioned in Stripe library docs.
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', (req, res) => {
    // - Testing if received token from Stripe (token received from user payment for credits via Stripe checkout form)
    //   is being correctly communicated to Express server.
    console.log(req.body);
  });
};
