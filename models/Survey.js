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
  _user: { type: Schema.Types.ObjectId, ref: 'User' }, // - Used to identify which user this survey belongs to.
  dateSent: Date, // - Date that survey was sent.
  lastResponded: Date, // - Latest time that someone has voted on survey.
});

mongoose.model('surveys', surveySchema);
