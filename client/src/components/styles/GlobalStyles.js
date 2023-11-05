import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 300px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    
  }

  /* header {
  
  } */

  h1, h2, h3, h4 {
    letter-spacing: 2px;
   }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-indent: 0;
  }

  a {
    text-decoration: none;
  }

  p {
    letter-spacing: 0.025em;
    line-height: 1.5;
  }
`;

export default GlobalStyles;
