import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { red, blue, orange } from "../utils/colors.js";

const Text = styled.h1`
  color: white;
  position: relative;
  z-index: 3;
  font-family: "Barlow", Arial, sans-serif;
  font-size: 2.5rem;
`;

const Wrapper = styled.section`
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
  background: ${props => props.color};
  opacity: 0.85;
`;

const Word = styled.span`
  display: block;
`;

const splitTitle = title => {
  const wordArr = title.toLowerCase().split(" ");
  const newWordArr = [];
  wordArr.forEach(word => {
    switch (word) {
      case "&":
        newWordArr[newWordArr.length - 1] = `${
          newWordArr[newWordArr.length - 1]
        } &`;
        break;
      case "school":
        newWordArr[newWordArr.length - 1] = `${
          newWordArr[newWordArr.length - 1]
        } school`;
        break;
      default:
        newWordArr.push(word);
    }
  });

  return newWordArr;
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

Header.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf([red, blue, orange]).isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;
