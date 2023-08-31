import { createGlobalStyle } from "styled-components";

export const StyleVariables = {
  backgroundColor: "#0f2f4f",
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif;
    color: white;
  }

  body {
    margin: 0;
    background-color: ${StyleVariables.backgroundColor};
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
  }
`;

export default GlobalStyle;