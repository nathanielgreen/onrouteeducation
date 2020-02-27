import React from "react"
import styled from "styled-components"

const Text = styled.h1`
  color: white;
  position: relative;
  z-index: 3;
  font-family: "Barlow", Arial, sans-serif;
  font-size: 2.5rem;
`

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
  position: relative;

  @media (min-width: 720px) {
    height: 65vh;
  }
`

const Overlay = styled.div`
  height: 100%;
  position: absolute;
  z-index: 2;
  width: 100%;
  content: "";
  background: ${props => props.color};
  opacity: 0.85;
`

const Word = styled.span`
  display: block;
`

export default ({ text, color }) => (
  <Wrapper>
    <Overlay color={color} />
    <Text>
      {text
        .toLowerCase()
        .split(" ")
        .map((letter, index) => (
          <Word key={index}>{letter}</Word>
        ))}
    </Text>
  </Wrapper>
)
