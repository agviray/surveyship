import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  // - The required amount prop represents dollars converted to cents. Example:  $5 = 500 cents.
  // - The token prop represents a callback function which is called after we successfully retrieved an authorization token from Stripe API. This function gets called with the token.
  // - stripeKey represents our Stripe Publishable key
  render() {
    return (
      <StripeCheckout
        name="SurveyShip"
        description="$5.00 for 5 survey credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button
          className="btn"
          style={{ backgroundColor: '#1FD5A7', color: '#333333' }}
        >
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
