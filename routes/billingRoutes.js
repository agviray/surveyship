const keys = require('../config/keys');
// - Must require (aka "import") stripe library by following syntax specifically mentioned in Stripe library docs.
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    // - Create charge object
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5.00 for 5 credits',
      source: req.body.id,
    });

    console.log(charge);
  });
};
