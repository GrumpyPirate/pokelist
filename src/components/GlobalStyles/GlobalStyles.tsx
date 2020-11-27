import { createGlobalStyle } from 'styled-components';

import { bodyFontFamily, colours, fontAntialiasing } from '../../config/styles';

export default createGlobalStyle`
  body {
    ${fontAntialiasing}
    font-family: ${bodyFontFamily};
    background-color: ${colours.peach};
  }
`;
