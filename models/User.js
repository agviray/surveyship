const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructure the Schema property from Mongoose.

// - Defines the properties that a user record (on the MongoDB database) will have.
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

// - Create a model class
//   - First argument: 'users' describes the collection, in this case, the users collection.
//   - Second argument: The schema that we are using for a given user.
mongoose.model('users', userSchema);
