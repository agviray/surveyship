import styled from 'styled-components';

export const StyledLayout = styled.div`
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;
  }
  main {
    padding: 6rem 1.25rem;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #f5f8fe;
  }
`;
