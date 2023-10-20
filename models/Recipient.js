const mongoose = require('mongoose');
const { Schema } = mongoose;

// - This is a subdocument which is used to represent
//    a single survey receipient's response to a given survey.
// - responded property represents the recipient's response to the
//   "yes or no" survey.
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

// - Export recipientSchema for use in another model.
module.exports = recipientSchema;
