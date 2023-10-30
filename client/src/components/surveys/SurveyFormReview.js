import React from 'react';

// - Shows user their form inputs, for their review.
const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h3>Confirm your survey entries!</h3>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
