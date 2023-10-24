import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

// - Shows a form for user to add inputs to create a survey.
class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h1>SurveyForm</h1>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          <Field type="text" name="surveyTitle" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
