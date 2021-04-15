import { css } from "styled-components";

import SairaRegular from "./Saira-Regular.ttf";
import SairaBold from "./Saira-Bold.ttf";

export const font_face_saira = css`
  @font-face {
    font-family: "Saira";
    font-weight: 400;
    font-style: normal;
    src: url(${SairaRegular});
  }

  @font-face {
    font-family: "Saira";
    font-weight: 600;
    font-style: normal;
    src: url(${SairaBold});
  }
`;
