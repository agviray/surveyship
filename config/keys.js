// - DO commit this so that app knows what to do in dev or prod environment.

// - Logic that decides whether we are in a production or development environment.
if (process.env.NODE_ENV === 'production') {
  // - Return the production environment set of keys for use.
  module.exports = require('./prod');
} else {
  // - Return/export the development environment set of keys for use, from the dev.js file.
  module.exports = require('./dev');
}
