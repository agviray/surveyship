import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

// - Shows SurveyForm and SurveyFormReview.
// - Toggles between SurveyForm and SurveyFormReview.
class SurveyNew extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
