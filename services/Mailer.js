// - Houses email logic and configuration for Mailer object.
// - The Mailer object, represents the email that will be
//   sent out to users.
// ************************************************************
const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

class Mailer {
  constructor({ subject, recipients }, content) {
    // - Create array of email addresses strings.
    this.recipients = recipients.map(({ email }) => email);
    // - Set a default value for isMultiple flag to true.
    // - Essentially says that we are expecting multiple
    //   email addresses in the recipients array.
    this.isMultiple = true;
    // - If only 1 email address provided, set isMultiple
    //   flag to false.
    if (this.recipients.length === 1) {
      this.recipients = this.recipients[0];
      this.isMultiple = false;
    }
    // - Add object and key:value pairs to reference
    //   remainder of necessary email data.
    this.emails = {
      to: this.recipients,
      from: 'no-reply@surveyship.com',
      subject: subject,
      html: content,
      tracking_settings: {
        click_tracking: {
          enable: true,
          enable_text: true,
        },
      },
      isMultiple: this.isMultiple,
    };
    sgMail.setApiKey(keys.sendGridKey);
  }
}

module.exports = Mailer;
