import React from 'react';
import {
  StyledWrapper,
  StyledVideoWrapper,
  StyledContent,
  StyledSignInLink,
} from './styles/Landing.styled';
import oceanVideo from '../assets/calm-ocean-aerial.mp4';
// import shipSvg from '../assets/images/ship.svg';
import shipWave from '../assets/images/ship-wave.svg';

const Landing = () => {
  return (
    <StyledWrapper>
      <StyledVideoWrapper>
        <video playsInline autoPlay muted loop>
          <source src={oceanVideo} type="video/mp4"></source>
          Your browser does not support the video tag
        </video>
      </StyledVideoWrapper>
      <StyledContent>
        <h1>SurveyShip</h1>
        <span>Collect feedback from users.</span>
        <span>
          <img src={shipWave} alt="ship" />
        </span>
        <StyledSignInLink href="/auth/google">
          <span>Login with Google</span>
        </StyledSignInLink>
      </StyledContent>
    </StyledWrapper>
  );
};

export default Landing;
