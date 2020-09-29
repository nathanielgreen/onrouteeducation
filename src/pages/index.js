import React from "react";
import { graphql } from "gatsby";

import HomePageTemplate from "../templates/home/HomeTemplate";

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
          imageFocus
        }
        paragraph1
        paragraph2
      }
    }
  }
`;

export default HomePage;
