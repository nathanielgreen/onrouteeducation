import React from "react";
import styled from "styled-components";

import { splitTitle } from "./helpers";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  @media (min-width: 720px) {
    height: 65vh;
  }
`;

const Overlay = styled.div`
  height: 100%;
  position: absolute;
  z-index: 2;
  width: 100%;
  content: "";
  background: ${props =>
    props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  opacity: 0.85;
`;

const Text = styled.h1`
  color: white;
  position: relative;
  z-index: 3;
  font-family: "Barlow", Arial, sans-serif;
  font-size: 2.5rem;
`;

const Word = styled.span`
  display: block;
`;

type HeaderProps = {
  text: string;
  color: "red" | "blue" | "orange";
  image: string;
};

const Header = ({ text, color, image }) => (
  <Wrapper image={image}>
    <Overlay color={color} />
    <Text>
      {splitTitle(text).map((letter, index) => (
        <Word key={index}>{letter}</Word>
      ))}
    </Text>
  </Wrapper>
);

export default Header;
