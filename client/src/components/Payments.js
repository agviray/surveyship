import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  // - The required amount prop represents dollars converted to cents. Example:  $5 = 500 cents.
  // - The token prop represents a callback function which is called after we successfully retrieved an authorization token from Stripe API. This function gets called with the token.
  // - stripeKey represents our Stripe Publishable key
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
