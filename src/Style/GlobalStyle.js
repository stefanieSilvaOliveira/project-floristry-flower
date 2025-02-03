import { createGlobalStyle } from "styled-components";

import FontEspecial from "../fonts/Comfortaa-Regular.ttf";

const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", serif;

        @font-face {
        font-family: 'Personalizada';
        src: url(${FontEspecial}) format('truetype');
    
  }
     }
`

export default GlobalStyles;