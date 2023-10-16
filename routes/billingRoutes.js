module.exports = (app) => {
  app.post('/api/stripe', (req, res) => {
    // - Add logic to handle token, somehow reach out to Stripe API, and finalize the charge.
    // - After charge finalized, update user's number of credits.
  });
};
