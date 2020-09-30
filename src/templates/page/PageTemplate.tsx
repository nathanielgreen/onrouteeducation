import React from "react";
import styled from "styled-components";

import { Header, Footer, Padding, Subheader } from "../../components";
import DefaultTheme from "../../themes/DefaultTheme";

const Body = styled.div`
  min-height: 300px;
`;

export type PageTemplateProps = {
  frontmatter: {
    color: "red" | "blue" | "orange";
    title: string;
    image: string;
  };
  html: any;
};

export const PageTemplate: React.FC<PageTemplateProps> = ({
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

export default PageTemplate;
