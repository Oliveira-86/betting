import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.grey_light};
    font-family: 'Roboto', Helvetica, sans-serif;
  }
  * {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  html body {
    padding: 0;
    margin: 0;
  }
`;      