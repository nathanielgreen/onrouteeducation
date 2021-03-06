import React from "react";
import styled from "styled-components";

import {
  Header,
  Subheader,
  Padding,
  NavBox,
  Person,
  Footer,
  Paragraph,
} from "../../components";

import DefaultTheme from "../../themes/DefaultTheme";

const PersonBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 -10px;
  & > div {
    margin: 30px 10px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    margin: 0;
    & > div {
      margin: 10px 0;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 16px 8px;
`;

const NavBoxWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
`;

export type HomePageTemplateProps = {
  heading: string;
  headerImage: string;
  services: {
    heading: string;
    paragraph: string;
    links: {
      link: string;
      text: string;
      image: string;
      color: string;
    }[];
  };
  who: {
    heading: string;
    people: {
      name: string;
      title: string;
      image: string;
      imageFocus: string;
    }[];
    paragraph1: string;
    paragraph2: string;
  };
};

const HomePageTemplate = ({ heading, headerImage, services, who }) => {
  const boxPositioning = (index) => {
    switch (index) {
      case 0:
        return "flex-start";
      case 2:
        return "flex-end";
      default:
        return "center";
    }
  };

  return (
    <DefaultTheme>
      <Header text={heading} color="red" image={headerImage} />
      <ContentWrapper>
        <Subheader text={services.heading} />
        <Paragraph text={services.paragraph} />
      </ContentWrapper>
      <NavBoxWrapper>
        {services.links.map((link, index) => (
          <NavBox
            key={index}
            slug={link.link}
            text={link.text}
            color={link.color}
            alignSelf={boxPositioning(index)}
            image={link.image}
          ></NavBox>
        ))}
      </NavBoxWrapper>
      <ContentWrapper>
        <Subheader text={who.heading} />
        <Paragraph text={who.paragraph1} />
        <PersonBoxWrapper>
          {who.people.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              title={person.title}
              image={person.image}
              imageFocus={person.imageFocus}
            />
          ))}
        </PersonBoxWrapper>
        <Paragraph text={who.paragraph2} />
      </ContentWrapper>
      <Footer />
    </DefaultTheme>
  );
};

export default HomePageTemplate;
