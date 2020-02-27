import React from "react"
import styled from "styled-components"

const Paragraph = styled.p`
  width: 100%;
  white-space: pre-wrap;
`

export default ({ text }) => <Paragraph>{text}</Paragraph>
