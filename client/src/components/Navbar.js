import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StyledNavbar, StyledLogo } from './styles/Navbar.styled';
import ship from '../assets/images/ship.svg';
import NavMenu from './NavMenu';

// Using class based component.
class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <div>
          <Link to={this.props.auth ? '/surveys' : '/'}>
            <StyledLogo>
              <img src={ship} alt="SurveyShip logo" />
            </StyledLogo>
          </Link>
          <NavMenu />
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
