import React from "react";
import { graphql } from "gatsby";

import { HomePageTemplate } from "../templates/homeTemplate.js";

const HomePage = ({ data }) => <HomePageTemplate {...data.homeJson} />;

export const query = graphql`
  {
    homeJson {
      heading
      services {
        heading
        paragraph
        links {
          link
          text
          image
          color
        }
      }
      who {
        heading
        people {
          name
          title
          image
        }
        paragraph1
        paragraph2
      }
    }
  }
`;

export default HomePage;
