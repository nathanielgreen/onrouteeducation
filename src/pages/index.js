import React from "react"

import Header from "../components/Header.js"
import Subheader from "../components/Subheader.js"
import Paragraph from "../components/Paragraph.js"
import Padding from "../components/Padding.js"
import NavBox from "../components/NavBox.js"
import Person from "../components/Person.js"

import DefaultLayout from "../layouts/DefaultLayout.js"

import { red } from "../utils/colors.js"

const HomePage = ({ data }) => {
  const pageData = data.allHomeJson.edges[0].node
  console.log(pageData)
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
      <Header
        text={pageData.heading}
        color={red}
        image="images/uploads/header.jpg"
      />
      <Padding>
        <Subheader text={pageData.services.heading} />
        <Paragraph text={pageData.services.paragraph} />
      </Padding>
      <Padding width="100%">
        {pageData.services.links.map((link, index) => (
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
        <Subheader text={pageData.who.heading} />
        <Paragraph text={pageData.who.paragraph1} />
        {pageData.who.people.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            title={person.title}
            image={person.image}
            backgroundPosition="left"
          />
        ))}
        <Paragraph text={pageData.who.paragraph2} />
      </Padding>
    </DefaultLayout>
  )
}

export const query = graphql`
  {
    allHomeJson {
      edges {
        node {
          heading
          services {
            heading
            paragraph
            links {
              link
              text
              color
              image
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
    }
  }
`

export default HomePage
