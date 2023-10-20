// - requireCredits.js is a custom middleware used to check
//   if a user is has enough credits to send out a survey.
// - Note that we are saying that every survey uses 1 credit.
module.exports = (req, res, next) => {
  // - The "next" argument is a function that's called when this middleware is finished running.
  // - next will pass the request onto the next middleware if necessary.

  // - If the user does not have > 0 credits, then do not proceed to route handler and show error.
  if (!req.user.credits < 1) {
    // - Research HTTP status code definitions to see why we're using the 403 code.
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  // - If user is available (ie if user is logged in/authenticated), everything is good,
  //   so next is called to allow the user to continue onto the route handler.
  next();
};
