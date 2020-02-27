import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vw;
  max-height: 350px;
  position: relative;
`

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.image});
`

const Banner = styled.div`
  height: 25%;
  width: 100%;
  position: absolute;
  bottom: 0;
`

const BannerBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: black;
  z-index: 1;
  opacity: 0.75;
`

const Name = styled.h3`
  font-weight: bold;
  font-size: 1.1rem;
  z-index: 2;
  margin: 10px;
`

const Title = styled.h4`
  font-weight: normal;
  font-size: 0.9rem;
  z-index: 2;
  margin: 10px;
`

export default ({ name, title, image }) => (
  <Wrapper>
    <BackgroundImage />
    <Banner>
      <BannerBackground />
      <Name>{name}</Name>
      <Title>{title}</Title>
    </Banner>
  </Wrapper>
)
