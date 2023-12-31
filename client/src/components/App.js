import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// - Import all defined actions and assign to actions object.
import * as actions from '../actions';

import Layout from './Layout';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  // - Check if user is logged in or out on intial render of application.
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact={true} path="/" element={<Layout />}>
              <Route path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<SurveyNew />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default connect(null, actions)(App);
