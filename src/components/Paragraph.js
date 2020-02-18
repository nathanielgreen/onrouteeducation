import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  width: 100%;
`

export default ({ text }) => (
  <Paragraph>
    { text }
  </Paragraph>
)
