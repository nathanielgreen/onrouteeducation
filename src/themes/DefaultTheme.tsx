import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/normalize.css";

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #ffffff;
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
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
