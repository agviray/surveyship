import React from 'react';
import { connect } from 'react-redux';

// - Shows user their form inputs, for their review.
const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Confirm your survey entries!</h5>

      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps)(SurveyFormReview);
