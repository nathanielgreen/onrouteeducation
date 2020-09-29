import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/normalize.css";

const GlobalStyle = createGlobalStyle`
  body {
  font-family: "Barlow", Arial, sans-serif;
  }
`;

export default ({ children }) => {
  const theme = {
    colors: {
      red: "#FF8B7D",
      blue: "#7DB5FF",
      orange: "#FFC8A5",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
