import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 56px;
  line-height: 56px;
  background-color: #5a7d9e;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  & > div {
    position: relative;
    height: 100%;
    padding: 0 10px;
  }
`;
