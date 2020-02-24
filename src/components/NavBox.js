import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BoxWrapper = styled.div`
  width: 80vw;
  height: 80vw;
  max-width: 400px;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff8b7d;
  border-radius: 6px;
  margin: 20px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
`

const Text = styled.h3`
  font-size: 1.5rem;
  width: 50%;
  color: white;
  border: none;
  text-decoration: none;
`

export default ({ text, slug }) => (
  <Link to={slug}>
    <BoxWrapper>
      <Text>{text}</Text>
    </BoxWrapper>
  </Link>
)
