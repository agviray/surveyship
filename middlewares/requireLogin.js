// - requireLogin.js is a custom middleware used to check
//   if a user is authenticated/logged in.
module.exports = (req, res, next) => {
  // - The "next" argument is a function that's called when this middleware is finished running.
  // - next will pass the request onto the next middleware if necessary.

  // - If no user available (ie user is not logged in), then return an error.
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  // - If user is available (ie if user is logged in/authenticated), everything is good,
  //   so "next" is called to allow the user to continue onto the route handler.
  next();
};
