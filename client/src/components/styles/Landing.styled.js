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
  @media screen and (min-width: 800px) {
    padding: 200px 0;
  }
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

    &::-webkit-media-controls-start-playback-button {
      display: none !important;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    padding: 1rem 1.5rem;
    font-size: 18px;
    background-color: rgba(50, 105, 250, 1);
    border-radius: 5px;

    &:hover {
      background-color: #254ec0;
    }
  }
`;

export const StyledContentCards = styled.div`
  position: relative;
  padding: 3rem 1.25rem;
  max-width: 2000px;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 5rem 1.25rem;
  }
`;

export const StyledContentCard = styled.div`
  padding: 2rem 0;
  max-width: 300px;
  margin: 0 auto;

  & > div {
    // - Card heading container
    &:nth-of-type(1) {
      padding-bottom: 1.5rem;
      // - Icon background circle.
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        margin: 0 auto 3rem auto;
        border-radius: 50%;
        background-color: #c8d8ee;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

        // - Icon (image) container
        span {
          display: inline-block;
          line-height: 0;
          width: 50px;
          font-size: 0;
          img {
            width: 50px;
          }
        }
      }
      h3 {
        font-size: 28px;
        text-align: center;
      }
    }
    // - Card main content container
    &:nth-of-type(2) {
      & > p,
      & > span {
        text-align: center;
        padding: 0 2rem;
      }
      & > span {
        display: block;
        padding-top: 1.75rem;
        font-size: 13px;
        color: #8f8f8f;
      }
    }
  }
`;

export const StyledButtonContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
`;
