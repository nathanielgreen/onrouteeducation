import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vw;
  max-height: 350px;
  position: relative;
  background: linear-gradient(lightgrey, grey, #292e44), grey;
`

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media(max-width: 600px) {
    background-position: ${props => props.backgroundPosition};
    background-size: cover;
  }
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
  opacity: 0.95;
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

export default ({ name, title, image, backgroundPosition }) => (
  <Wrapper>
    <BackgroundImage backgroundPosition={backgroundPosition} image={image} />
    <Banner>
      <BannerBackground />
      <BannerContent>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </BannerContent>
    </Banner>
  </Wrapper>
)
