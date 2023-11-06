import React from 'react';
import {
  StyledLanding,
  StyledHero,
  StyledVideoWrapper,
  StyledContent,
  StyledSignInLink,
  StyledContentCards,
  StyledContentCard,
} from './styles/Landing.styled';
import oceanVideo from '../assets/calm-ocean-aerial.mp4';
// import shipSvg from '../assets/images/ship.svg';
import shipWave from '../assets/images/ship-wave.svg';

const landingContentCards = [
  {
    heading: 'Create Surveys',
    mainContent: 'Create simple survey for your customers.',
    sideNote:
      'Note: Surveys we be presented to your customers as questions that expect a "Yes" or "No" response.',
    icon: null,
  },
  {
    heading: 'Ship It',
    mainContent: 'Email the survey to your list of customers',
    sideNote: '',
    icon: null,
  },
  {
    heading: 'Receive Feedback',
    mainContent:
      'Immediately receive feedback from your customers as soon as they complete the survey',
    sideNote: '',
    icon: null,
  },
];

const Landing = () => {
  const renderedContent = (
    <>
      {landingContentCards.map(
        ({ heading, mainContent, sideNote, icon }, index) => {
          return (
            <article key={index}>
              <StyledContentCard>
                <div>
                  <h3>{heading}</h3>
                  {icon ? <img src={icon.img} alt={icon.alt} /> : null}
                </div>
                <div>
                  <p>{mainContent}</p>
                  <span>{sideNote}</span>
                </div>
              </StyledContentCard>
            </article>
          );
        }
      )}
    </>
  );
  return (
    <StyledLanding>
      <section>
        <StyledHero>
          <StyledVideoWrapper id="video-wrapper">
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
        </StyledHero>
      </section>
      <section>
        <StyledContentCards>{renderedContent}</StyledContentCards>
      </section>
    </StyledLanding>
  );
};

export default Landing;
