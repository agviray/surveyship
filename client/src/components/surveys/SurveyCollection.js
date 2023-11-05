import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import {
  StyledSurveyCollection,
  StyledSurveyCard,
} from '../styles/SurveyCollection.styled';

const SurveyCollection = ({ fetchSurveys, surveys }) => {
  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <StyledSurveyCollection>
      {surveys.reverse().map((survey) => (
        <StyledSurveyCard key={survey._id}>
          <div>
            <h3>{survey.title}</h3>
            <p>{survey.body}</p>
            <span>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </span>
          </div>
          <div>
            <span>Yes: {survey.yes}</span>
            <span>No: {survey.no}</span>
          </div>
        </StyledSurveyCard>
      ))}
    </StyledSurveyCollection>
  );
};

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys,
  };
};

export default connect(mapStateToProps, { fetchSurveys: fetchSurveys })(
  SurveyCollection
);
