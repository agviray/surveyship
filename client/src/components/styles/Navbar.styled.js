import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: relative;
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
    max-width: 2000px;
    margin: 0 auto;
    height: 100%;
    padding: 0 10px;
    line-height: normal;
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

export const StyledToggler = styled.div`
  display: inline-block;
  width: 25px;
  line-height: 0;
  font-size: 0;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
