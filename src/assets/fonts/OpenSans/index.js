import { css } from "styled-components";

import OpenSansRegular from "./OpenSans-Regular.ttf";
import OpenSansBold from "./OpenSans-Bold.ttf";
import OpenSansSemiBold from "./OpenSans-SemiBold.ttf";

export const font_face_open_sans = css`
  @font-face {
    font-family: "Open Sans";
    font-weight: 400;
    font-style: normal;
    src: url(${OpenSansRegular});
  }

  @font-face {
    font-family: "Open Sans";
    font-weight: 600;
    font-style: normal;
    src: url(${OpenSansSemiBold});
  }

  @font-face {
    font-family: "PT Sans";
    font-weight: bold;
    font-style: normal;
    src: url(${OpenSansBold});
  }
`;
