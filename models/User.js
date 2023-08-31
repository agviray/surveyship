const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructure the Schema property from Mongoose.

// - Defines the properties that a user record (on the MongoDB database) will have.
const userSchema = new Schema({
  googleId: String,
});

// - Create a model class
//   - First argument: 'users'
//   - Second argument: The schema that we are using for a given user.
mongoose.model('users', userSchema);
