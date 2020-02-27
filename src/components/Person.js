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
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 10px;
`

const Title = styled.h4`
  color: white;
  font-weight: normal;
  font-size: 0.9rem;
  margin: 10px;
`

const BannerContent = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
`

export default ({ name, title, image }) => (
  <Wrapper>
    <BackgroundImage />
    <Banner>
      <BannerBackground />
      <BannerContent>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </BannerContent>
    </Banner>
  </Wrapper>
)
