const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructure Schema propety from Mongoose.
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema], // - Type: array containing list of RecipientSchema.
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

mongoose.model('surveys', surveySchema);
