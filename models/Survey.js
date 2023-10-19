const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructure Schema propety from Mongoose.

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String], // - Type: array containing strings.
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

mongoose.model('surveys', surveySchema);
