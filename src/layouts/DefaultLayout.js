import React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  width: 100vw;
}
body {
  background: #ffffff;
  width: 100vw;
  margin: 0;
}
#gatsby-focus-wrapper {
  height: 100vh;
  font-family: 'Barlow', Arial, sans-serif;
}
`
export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Barlow:400,700&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
    { children }
  </React.Fragment>
)
