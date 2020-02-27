import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BoxWrapper = styled.div`
  width: 80vw;
  height: 80vw;
  max-width: 350px;
  max-height: 250px;
  align-self: ${props => props.alignSelf};

  background: ${props => props.color};
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
`

const Text = styled.h3`
  font-size: 1.5rem;
  width: 50%;
  color: white;
  border: none;
  text-decoration: none;
`

export default ({ text, slug, color, alignSelf }) => (
  <BoxWrapper alignSelf={alignSelf} color={color}>
    <Link to={slug}>
      <Text>{text}</Text>
    </Link>{" "}
  </BoxWrapper>
)
