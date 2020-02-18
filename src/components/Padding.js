import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 26px;
`

export default ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
)
