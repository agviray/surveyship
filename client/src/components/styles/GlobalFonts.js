import { createGlobalStyle } from 'styled-components';
import NunitoSansBold from '../../fonts/Nunito-Sans_ff/Nunito-Sans-Bold.ttf';
import NunitoSansRegular from '../../fonts/Nunito-Sans_ff/Nunito-Sans-Regular.ttf';

const GlobalFonts = createGlobalStyle`
    @font-face {
    font-family: "Nunito Sans Bold";
    src: url(${NunitoSansBold});
  }
    @font-face {
    font-family: "Nunito Sans Regular";
    src: url(${NunitoSansRegular});
  }
`;

export default GlobalFonts;
