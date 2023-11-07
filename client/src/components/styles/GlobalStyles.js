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
    font-family: "Nunito Sans Regular", Arial, Helvetica, sans-serif;
    background-color: #F5F8FE;
    
  }
  
  /* header {
    
  } */
  
  h1, h2, h3, h4 {
    font-family: "Nunito Sans Bold", Arial, Helvetica, sans-serif;
    margin: 0;
  }

  h1 {
    font-size: 40px;
    padding-bottom: 2rem;
    @media screen and (min-width: 800px){
      font-size: 50px;
      
    }
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
