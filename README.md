# SurveyShip

<em>SurveyShip</em> is a full stack application used to email surveys to multiple users. Built with MERN stack (MongoDB, Express, React, and Node).

- Login with Google OAuth.
- Create surveys that expect a "Yes" or "No" response.
- Email the surveys to multiple people.
- View your created surveys while waiting for responses from the recipients.
- The "Yes" or "No" counters will update once a recipient responds.
- Create and send another survey!

## Built with

- create-react-app

- MongoDB Atlas + MongooseJS

  - Used for database management.

- NodeJS + ExpressJS

  - Used to create backend API

- Stripe API

  - Used to simulate payment for survey credits.

- Google OAuth

  - Used for user authentication.

- Sendgrid + Sendgrid webhooks

  - Used to record and send survey recipient data to SurveyShip.

- Redux

  - Used to manage state.

- Axios

  - Handles requests made to the API.

- Styled-Components
  - Used for all styling.

## How To Use

1. Login with Google OAuth, and you will be taken to the Dashboard screen.

2. Your credits can be seen at the top of page. If you have 0 credits, you will need to "buy" some.

   - **_ Note: This is a testing environment, so Stripe API is only used to <strong>SIMULATE</strong> payment, so you are not actually paying anything. Fake payment details are provided. _**

3. Click on the "ADD CREDITS" button and enter the follow fake payment details:

   - <strong>Email:</strong> fakemail@example.com
   - <strong>Card Number MUST BE THIS VALUE:</strong> 4242 4242 4242 4242
   - <strong>Expiration date MM/YY:</strong> Any date further than today's date.
   - <strong>Security code (the CVC number):</strong> Any 3 or 4 digit number.

4. Click the "Pay $5.00" button.

5. You'll be brought back to the Dashboard screen, and your credits should be increased to 5. Now you can create emails.

6. Click the blue plus + button at the bottom left of the screen.

7. Fill our the Survey Title, Subject Line, Email Body, and Recipient List fields. See the notes below for additional details pertaining to each field.

   - <strong>Survey Title:</strong> Title of your survey. This will be visible to you only, not the recipients.
   - <strong>Subject Line:</strong> Shown as the Subject of your email. Visible to recipients.
   - <strong>Email Body:</strong> This is the body of your email. It serves as the "question" that you want to ask the recipients.

     - <strong>Your question should be a "Yes or No" type of question, as your recipients will only have the ability to click on either a Yes or No as their response.</strong>

     - <strong>Example:</strong> <em>"Thank you for contacting us today. Please reach out to us again if you run into any problems. Did we resolve your issue?"</em>

   - <strong>Recipient List:</strong> This is a list of email addresses that you want to send your survey to.

     - <strong>The email addresses must be separanted by commas, with a single space after the comma, and the last email address must not have a comma at the end.</strong>

     - <strong>Example:</strong> <em>someone@fakemail.com, another-one@fakermail.com, last-one@fakestmail.com</em>

8. Click the "NEXT" button to be brought to a screen with your survey details. You can review what you have entered before sending off the survey.

9. After you review your survey details, click the "SEND SURVEY" button to send off you surveys!

10. After your surveys are sent, you'll be brought back to the Dashboard screen where you can view your surveys and their associated details, ie the total of Yes and No responses, the date that the survey was sent out, etc.

    - The number of Yes or No responses will change once a recipient responds to your survey.

    - If you are testing this application yourself, remember to allow some time for the Yes or No totals to update once you answer a survey. It may take anywhere between a few seconds to 2 minutes.
