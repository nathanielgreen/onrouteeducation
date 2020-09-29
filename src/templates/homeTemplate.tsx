import React from "react";
import styled from "styled-components";

import Header from "../components/Header/Header";
import Subheader from "../components/Subheader.js";
import Paragraph from "../components/Paragraph.js";
import Padding from "../components/Padding.js";
import NavBox from "../components/NavBox/NavBox";
import Person from "../components/Person/Person";

import DefaultTheme from "../themes/DefaultTheme";

export type HomePageTemplateProps = {
  heading: string;
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
    }[];
    paragraph1: string;
    paragraph2: string;
  };
};

const HomePageTemplate = ({ heading, services, who }) => {
  const boxPositioning = index => {
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
      <Header text={heading} color="red" image="images/uploads/header.jpg" />
      <Padding>
        <Subheader text={services.heading} />
        <Paragraph text={services.paragraph} />
      </Padding>
      <Padding width="100%">
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
      </Padding>
      <Padding>
        <Subheader text={who.heading} />
        <Paragraph text={who.paragraph1} />
        {who.people.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            title={person.title}
            image={person.image}
            backgroundPosition="left"
          />
        ))}
        <Paragraph text={who.paragraph2} />
      </Padding>
    </DefaultTheme>
  );
};

export default HomePageTemplate;
