/*
*****************************************
*****************************************
Replaced this with SurveyCollection 
functional component!!
*****************************************
*****************************************

*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  // - Fetch all logged-in user's created surveys when component
  //   renders in the DOM.
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#" onClick={(e) => e.preventDefault}>
              Yes: {survey.yes}
            </a>
            <a href="#" onClick={(e) => e.preventDefault}>
              No: {survey.no}
            </a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys,
  };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
