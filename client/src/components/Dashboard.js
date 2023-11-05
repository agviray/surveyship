import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDashboard } from './styles/Dashboard.styled';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <StyledDashboard>
      <h1>Dashboard</h1>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
