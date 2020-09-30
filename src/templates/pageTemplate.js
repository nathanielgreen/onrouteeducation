import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Header, Footer } from "../components";
import DefaultLayout from "../layouts/DefaultLayout.js";
import Padding from "../components/Padding.js";
import Subheader from "../components/Subheader.js";
import DefaultTheme from "../themes/DefaultTheme";

const Body = styled.div`
  min-height: 300px;
`;

export const PageTemplate = ({
  frontmatter: { color, title, image },
  html,
}) => (
  <DefaultTheme>
    <Header text={title} color={color} image={image} />
    <Padding>
      <Subheader text={title} />
      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </Padding>
    <Footer />
  </DefaultTheme>
);

PageTemplate.propTypes = {
  frontmatter: PropTypes.exact({
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  html: PropTypes.string.isRequired,
};

export default ({ data }) => <PageTemplate {...data.markdownRemark} />;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        color
        image
      }
    }
  }
`;
