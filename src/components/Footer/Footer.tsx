import React from "react";
import styled from "styled-components";

import Padding from "../Padding.js";

const Wrapper = styled.footer`
  margin-top: 40px;
  width: 100vw;
  color: white;
  background: ${props => props.theme.colors.red};
  padding-bottom: 40px;
  font-family: "Barlow", Arial, sans-serif;
`;

const Heading = styled.h4`
  font-weight: bold;
  font-size: 1.5rem;
  align-self: flex-start;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin: 10px 20px;
`;

const Button = styled.button`
  background-color: #323232;
  border: solid 2px #474747;
  color: white;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 1rem;
  align-self: flex-end;
  font-weight: bold;
  padding: 10px 20px;
`;

type FooterProps = {
  heading: string;
  subheading: string;
  email: string;
};

export default ({ heading, subheading, email }: FooterProps) => (
  <Wrapper>
    <Padding>
      <Heading>{heading}</Heading>
      <Text>{subheading}</Text>
      <Button>{email}</Button>
    </Padding>
  </Wrapper>
);
