import React from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import { StyledNavMenu } from './styles/NavMenu.styled';

const NavMenu = ({ auth, isDisplayed }) => {
  // - Check auth prop to determine the Header UI to display.
  // - Different UI to display depending on user's current login status.
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <span>Credits: {auth.credits}</span>
          </li>,
          <li key="3">
            <a href="/api/logout">
              <span>Logout</span>
            </a>
          </li>,
        ];
    }
  };

  return (
    <StyledNavMenu className={isDisplayed ? 'isDisplayed' : ''}>
      <ul>{renderContent()}</ul>
    </StyledNavMenu>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(NavMenu);
