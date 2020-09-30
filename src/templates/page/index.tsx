import React from "react";
import { graphql } from "gatsby";

import PageTemplate from "./PageTemplate";

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
