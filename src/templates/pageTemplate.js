import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { red, blue, orange } from "../utils/colors.js"
import DefaultLayout from "../layouts/DefaultLayout.js"
import Padding from "../components/Padding.js"
import Header from "../components/Header.js"
import Subheader from "../components/Subheader.js"

const Body = styled.div`
  min-height: 450px;
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <DefaultLayout>
      <Header
        text={frontmatter.title}
        color={frontmatter.color}
        image={frontmatter.image}
      />
      <Padding>
        <Subheader text={frontmatter.title} />
        <Body dangerouslySetInnerHTML={{ __html: html }} />
      </Padding>
    </DefaultLayout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        color
        image
      }
    }
  }
`
