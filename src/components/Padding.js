import React from "react"
import styled from "styled-components"

const Shell = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Wrapper = styled.div`
  padding: 0 26px;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default ({ children }) => (
  <Shell>
    <Wrapper>{children}</Wrapper>
  </Shell>
)
