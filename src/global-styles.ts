import { createGlobalStyle } from "styled-components";

import { font_face_open_sans } from "./assets/fonts/OpenSans";
import { font_face_saira } from "./assets/fonts/Saira";

export const GlobalStyles = createGlobalStyle`
  ${font_face_open_sans}
  ${font_face_saira}

  :root {
    --text-primary: #000000;
    --text-primary-light: rgba(0, 0, 0, 0.6);
    --text-secondary: #FFFFFF;
    --text-secondary-light: rgba(255, 255, 255, 0.6);

    --bg-main: #FFFFFF;
    --bg-secondary: rgba(125, 161, 230, 0.2);
    --bg-sidebar: linear-gradient(180deg, #022E71 0%, #903F69 100%);

    --crцitical: #eb747f;
    --critical: #FF0000;
    --high: #FF8744;
    --low: #FF8744;
    --ok: #64c565;
    --clean: #64c565;

    --blue: #004B8F;
    --blue-light: rgba(122, 156, 222, 0.2);
    --blue-dark: #061D49;
    --sidebar-hover: rgba(48, 156, 255, 0.2);
    --tabs-secondary: #FAFAFA;
    --gray: #CCCCCC
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    margin: 0;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: #000000;
    background-color: #ffffff;
  }
  
  svg {
    fill: currentColor;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  tbody {
    width: 100%;
  }
`;
