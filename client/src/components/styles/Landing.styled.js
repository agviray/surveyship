import styled from 'styled-components';

export const StyledLanding = styled.div`
  /* position: relative; */
  /* height: 100vh; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const StyledHero = styled.div`
  position: relative;
  padding: 100px 0;
`;

export const StyledVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  // - Tinted overlay for video
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.2);
  }

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

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */
  position: relative;
  text-align: center;
  color: white;

  & > span {
    display: inline-block;
    // - Tagline
    &:nth-of-type(1) {
      font-size: 20px;
      padding-bottom: 1rem;
    }
    // - Ship logo
    &:nth-of-type(2) {
      width: 80px;
      padding-bottom: 1.5rem;
      font-size: 0;
      line-height: 0;

      @media screen and (min-width: 1200px) {
        width: 100px;
      }

      img {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`;

export const StyledSignInLink = styled.a`
  margin-top: 2rem;
  color: white;
  span {
    padding: 8px 16px;
    background-color: #5a7d9e;
    border-radius: 5px;

    &:hover {
      background-color: #3b556d;
    }
  }
`;

export const StyledContentCards = styled.div`
  position: relative;
  padding: 0 1.25rem;
`;

export const StyledContentCard = styled.div``;
