import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  StyledNavbar,
  StyledLogo,
  StyledToggler,
  StyledOverlay,
} from './styles/Navbar.styled';
import ship from '../assets/images/ship.svg';
import NavMenu from './NavMenu';
import toggler from '../assets/images/menu-toggler.svg';

const Navbar = ({ auth }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <StyledNavbar>
      <div>
        <Link to={auth ? '/surveys' : '/'}>
          <StyledLogo>
            <img src={ship} alt="SurveyShip logo" />
          </StyledLogo>
        </Link>
        <StyledToggler onClick={() => setIsDisplayed(!isDisplayed)}>
          <img src={toggler} alt="Menu toggler" />
        </StyledToggler>
        <StyledOverlay
          className={isDisplayed ? 'isVisible' : ''}
          onClick={() => {
            return isDisplayed ? setIsDisplayed(false) : null;
          }}
        />
        <NavMenu isDisplayed={isDisplayed} />
      </div>
    </StyledNavbar>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth,
  };
};

export default connect(mapStateToProps)(Navbar);
