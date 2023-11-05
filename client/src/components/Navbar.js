import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';
import { StyledNavbar, StyledLogo } from './styles/Navbar.styled';
import ship from '../assets/images/ship.svg';

// Using class based component.
class Navbar extends Component {
  // - Check this.props.auth property, to determine the Header UI to display.
  // - Different UI to display depending on user's current login status.
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">
              <span>Logout</span>
            </a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <StyledNavbar>
        <div>
          <Link to={this.props.auth ? '/surveys' : '/'}>
            <StyledLogo>
              <img src={ship} alt="SurveyShip logo" />
            </StyledLogo>
          </Link>
          <ul>{this.renderContent()}</ul>
        </div>
      </StyledNavbar>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth,
  };
};

export default connect(mapStateToProps)(Navbar);
