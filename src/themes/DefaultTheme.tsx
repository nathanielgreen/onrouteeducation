import React from "react";
import { ThemeProvider } from "styled-components";
import "../styles/normalize.css";

export default ({ children }) => {
  const theme = {
    colors: {
      red: "#FF8B7D",
      blue: "#7DB5FF",
      orange: "#FFC8A5",
    },
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
