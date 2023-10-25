import React from 'react';
// - SurveyField contains logic to render a single
//   label and text input.

const SurveyField = ({ input, label }) => {
  // - Several properties are automatically available on props, due
  //   to implemention of redux-form. (ie: the input prop)
  // console.log(props);

  return (
    <div>
      <label>{label}</label>
      <input {...input} onBlur={input.onBlur} onChange={input.onChange} />
    </div>
  );
};

export default SurveyField;
