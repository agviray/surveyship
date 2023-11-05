import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDashboard } from './styles/Dashboard.styled';
import SurveyCollection from './surveys/SurveyCollection';

const Dashboard = () => {
  return (
    <StyledDashboard>
      <h1>Dashboard</h1>
      <SurveyCollection />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
