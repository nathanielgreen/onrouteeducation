import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const BoxWrapper = styled.div`
  width: 80vw;
  height: 80vw;
  max-width: 350px;
  max-height: 250px;
  align-self: ${props => props.alignSelf};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  border-radius: 6px;
  margin: 15px 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 700px) {
    max-height: 350px;
    margin: 15px 10px;
  }
`;

const Background = styled.div`
  background: ${props =>
    props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.color};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 6px;
  opacity: 85%;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 1;
`;

const Link = styled(GatsbyLink)`
  text-decoration: none;
`;

const Text = styled.h3`
  font-size: 1.5rem;
  width: 50%;
  color: white;
  border: none;
`;

export type NavBoxProps = {
  text: string;
  slug: string;
  color: string;
  alignSelf: "flex-start" | "flex-end" | "center";
  image: string;
};

export default ({ text, slug, color, alignSelf, image }) => (
  <BoxWrapper alignSelf={alignSelf} color={color} image={image}>
    <Background color={color} />
    <Content>
      <Link to={slug}>
        <Text>{text}</Text>
      </Link>
    </Content>
  </BoxWrapper>
);
