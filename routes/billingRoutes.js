const keys = require('../config/keys');
// - Must require (aka "import") stripe library by following syntax specifically mentioned in Stripe library docs.
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    // - Create charge after payment was finalized.
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5.00 for 5 credits',
      source: req.body.id,
    });

    // - After finalizing payment and creating a charge, we then update the
    //   user's credits.
    // - After updating credits, ensure that the update is saved in our database (MongoDB).
    // - req.user is assigned by PassportJS, and it refers to the user that submitted payment for credits.
    // - Use res.send(...) to send some data (ie the user) off to be used in the browser.
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
