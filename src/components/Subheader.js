import React from "react"
import styled from "styled-components"

const Text = styled.h2`
  font-size: 2rem;
  width: 100%;
`

const Wrapper = styled.section`
  align-self: flex-start;
  width: 70%;

  @media (mix-width: 720px) {
    width: 80%;
  }
`

export default ({ text }) => (
  <Wrapper>
    <Text>{text}</Text>
  </Wrapper>
)
