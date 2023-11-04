import React from 'react';
import styled from 'styled-components';
import oceanVideo from '../assets/calm-ocean-aerial.mp4';

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StyledContent = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

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
        Collect feedback from users.
      </StyledContent>
    </StyledWrapper>
  );
};

export default Landing;
