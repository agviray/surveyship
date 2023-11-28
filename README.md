# SurveyShip

<em>SurveyShip</em> is a full stack application used to email surveys to multiple users. Built with MERN stack (MongoDB, Express, React, and Node).

- Login with Google OAuth.
- Create surveys that expect a "Yes" or "No" response.
- Email the surveys to multiple people.
- View your created surveys while waiting for responses from the recipients.
- The "Yes" or "No" counters will update once a recipient responds.
- Create and send another survey!

## Demo

The website is deployed on Heroku. 

- Click [here](https://whispering-meadow-38168-08fd7c2bff1c.herokuapp.com/) to view the website, or copy and past the following link in your browser: https://whispering-meadow-38168-08fd7c2bff1c.herokuapp.com/

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
