import React from "react"
import styled from "styled-components"

import Padding from "./Padding.js"
import { red } from "../utils/colors.js"

const Wrapper = styled.footer`
  width: 100vw;
  color: white;
  background: ${red};
  padding-bottom: 40px;
`

const Heading = styled.h4`
  font-weight: bold;
  font-size: 1.5rem;
  align-self: flex-start;
`

const Text = styled.p`
  font-size: 1.2rem;
  margin: 10px 20px;
`

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
`

export default () => (
  <Wrapper>
    <Padding>
      <Heading>We love to talk.</Heading>
      <Text>
        Get in touch for an initial conversation about your professional and
        educational needs.
      </Text>
      <Button>hello@onrouteeducation.com</Button>
    </Padding>
  </Wrapper>
)
