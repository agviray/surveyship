import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  // - Fetch all logged-in user's created surveys when component
  //   renders in the DOM.
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return (
      <div>
        <h2>SurveyList</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys,
  };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
