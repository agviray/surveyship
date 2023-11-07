import React from 'react';
import {
  StyledLanding,
  StyledHero,
  StyledVideoWrapper,
  StyledContent,
  StyledSignInLink,
  StyledContentCards,
  StyledContentCard,
  StyledButtonContainer,
} from './styles/Landing.styled';
import oceanVideo from '../assets/calm-ocean-aerial.mp4';
// import shipSvg from '../assets/images/ship.svg';
import shipWave from '../assets/images/ship-wave.svg';
import surveyIcon from '../assets/images/survey-pic.png';
import shipIcon from '../assets/images/ship-pic.png';
import feedbackIcon from '../assets/images/feedback-pic.png';
import loginIcon from '../assets/images/login-icon.png';

const landingContentCards = [
  {
    isLoginCard: false,
    heading: 'Create Surveys',
    mainContent: 'Create simple survey for your customers.',
    sideNote:
      'Note: Surveys we be presented to your customers as questions that expect a "Yes" or "No" response.',
    icon: {
      img: surveyIcon,
      alt: 'Survey icon',
    },
  },
  {
    isLoginCard: false,
    heading: 'Ship It',
    mainContent: 'Email the survey to your list of customers',
    sideNote: '',
    icon: {
      img: shipIcon,
      alt: 'Ship icon',
    },
  },
  {
    isLoginCard: false,
    heading: 'Receive Feedback',
    mainContent:
      'Immediately receive feedback from your customers as soon as they complete the survey',
    sideNote: '',
    icon: {
      img: feedbackIcon,
      alt: 'Feedback icon',
    },
  },
  {
    isLoginCard: true,
    heading: 'Try It Out',
    mainContent:
      'Test out this application with a quick login via Google authentication. No sign up necessary--just click the Login button to start.',
    sideNote: '',
    icon: {
      img: loginIcon,
      alt: 'Feedback icon',
    },
  },
];

const Landing = () => {
  const renderedContent = (
    <>
      {landingContentCards.map(
        ({ isLoginCard, heading, mainContent, sideNote, icon }, index) => {
          return (
            <article key={index}>
              <StyledContentCard>
                <div>
                  <div>
                    <span>
                      {icon ? <img src={icon.img} alt={icon.alt} /> : null}
                    </span>
                  </div>
                  <h3>{heading}</h3>
                </div>
                <div>
                  <p>{mainContent}</p>
                  {sideNote === '' ? null : <span>{sideNote}</span>}
                  {isLoginCard ? (
                    <StyledButtonContainer>
                      <StyledSignInLink href="/auth/google">
                        <span>Login with Google</span>
                      </StyledSignInLink>
                    </StyledButtonContainer>
                  ) : null}
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
            <span>Ship surveys, get feedback.</span>
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
