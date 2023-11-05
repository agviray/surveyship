import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 56px;
  background-color: #5a7d9e;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 0 10px;
    line-height: normal;
  }

  & ul {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 100%;

    // - Logout button
    & > li:last-child {
      a {
        padding: 0;
        span {
          display: inline-block;
          height: 56px;
          line-height: 56px;
          padding: 0 1rem;
        }
      }
    }
  }
`;

export const StyledLogo = styled.span`
  display: inline-block;
  line-height: 0;
  font-size: 0;
  width: 50px;

  img {
    width: 100%;
  }
`;
