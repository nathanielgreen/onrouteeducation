import React from "react"
import PropTypes from "prop-types"

import Header from "../components/Header.js"
import Subheader from "../components/Subheader.js"
import Paragraph from "../components/Paragraph.js"
import Padding from "../components/Padding.js"
import NavBox from "../components/NavBox.js"
import Person from "../components/Person.js"

import DefaultLayout from "../layouts/DefaultLayout.js"

import { red } from "../utils/colors.js"

const HomePageComponent = ({ heading, services, who }) => {
  const boxPositioning = index => {
    switch (index) {
      case 0:
        return "flex-start"
      case 2:
        return "flex-end"
      default:
        return "center"
    }
  }

  return (
    <DefaultLayout>
      <Header text={heading} color={red} image="images/uploads/header.jpg" />
      <Padding>
        <Subheader text={services.heading} />
        <Paragraph text={services.paragraph} />
      </Padding>
      <Padding width="100%">
        {services.links.map((link, index) => (
          <NavBox
            key={index}
            slug={link.link}
            text={link.text}
            color={link.color}
            alignSelf={boxPositioning(index)}
            image={link.image}
          ></NavBox>
        ))}
      </Padding>
      <Padding>
        <Subheader text={who.heading} />
        <Paragraph text={who.paragraph1} />
        {who.people.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            title={person.title}
            image={person.image}
            backgroundPosition="left"
          />
        ))}
        <Paragraph text={who.paragraph2} />
      </Padding>
    </DefaultLayout>
  )
}

HomePageComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  services: PropTypes.exact({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.exact({
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ),
  }),
  who: PropTypes.exact({
    heading: PropTypes.string.isRequired,
    people: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
    paragraph1: PropTypes.string.isRequired,
    paragraph2: PropTypes.string.isRequired,
  }),
}

const HomePage = ({ data }) => <HomePageComponent {...data.homeJson} />

export const query = graphql`
  {
    homeJson {
      heading
      services {
        heading
        paragraph
        links {
          link
          text
          image
          color
        }
      }
      who {
        heading
        people {
          name
          title
          image
        }
        paragraph1
        paragraph2
      }
    }
  }
`

export default HomePage;
