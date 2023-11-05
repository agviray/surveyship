import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledVideoWrapper = styled.div`
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

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  text-align: center;
  color: white;

  & > span {
    display: inline-block;
    // - Headline
    &:nth-of-type(1) {
      font-size: 20px;
    }
    // - Ship logo
    &:nth-of-type(2) {
      width: 80px;
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
  }
`;
