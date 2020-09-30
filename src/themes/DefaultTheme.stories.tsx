import React from "react";
import styled from "styled-components";
import DefaultTheme from "./DefaultTheme";

const Wrapper = styled.div<{ direction: "column" | "row" }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction};
`;

const ColorBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.theme.colors[props.color]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  font-size: ${(props) => props.theme.fontSizes[props.size]};
  margin: 10px;
  padding: 0;
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes[props.size]};
  margin: 10px;
  padding: 0;
`;

export default {
  title: "Themes/DefaultTheme",
  component: DefaultTheme,
};

export const Colors = () => (
  <DefaultTheme>
    <Wrapper direction="row">
      <ColorBox color="red">Red</ColorBox>
      <ColorBox color="blue">Blue</ColorBox>
      <ColorBox color="orange">Orange</ColorBox>
    </Wrapper>
  </DefaultTheme>
);

export const FontSizes = () => (
  <DefaultTheme>
    <Wrapper direction="column">
      <Heading size="heading">h1 at size Heading`</Heading>
      <Heading size="subheading">h1 at size Subheading</Heading>
      <Heading size="body">h1 at size Body</Heading>
      <Body size="heading">p at size Heading</Body>
      <Body size="subheading">p at size Subheading</Body>
      <Body size="body">p at size Body</Body>
    </Wrapper>
  </DefaultTheme>
);
