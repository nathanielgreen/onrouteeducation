import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";

import Footer from "../components/Footer.js";

export const GlobalStyle = createGlobalStyle`
	html {
		width: 100vw;
	}
	body {
		background: #ffffff;
		width: 100vw;
		margin: 0;
		font-family: 'Barlow', Arial, sans-serif;
	}
	#gatsby-focus-wrapper {
		height: 100vh;
	}
	a {
		text-decoration: none;
	}
`;

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <title>On Route Education</title>
      <link
        href="https://fonts.googleapis.com/css?family=Barlow:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    {children}
    <Footer />
  </React.Fragment>
);
