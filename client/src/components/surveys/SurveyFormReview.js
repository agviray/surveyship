import _ from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { formFields } from './formFields';
import * as actions from '../../actions';

// - Shows user their form inputs, for their review.
const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const navigate = useNavigate();

  const reviewFields = _.map(formFields, ({ label, name }, index) => {
    return (
      <div key={index}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Confirm your survey entries!</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, navigate)}
        className="green white-text btn-flat right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(SurveyFormReview);
