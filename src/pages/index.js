import React from "react"
import Header from "../components/Header.js"
import Subheader from "../components/Subheader.js"
import Paragraph from "../components/Paragraph.js"
import Padding from '../components/Padding.js'
import DefaultLayout from '../layouts/DefaultLayout.js'

const stuff = {
  header: 'On Route Education.',
  subheader: 'Sustainable solutions for education innovation.',
  content: 'We lead the competition by offering schools a unique combination of professional coaching and training services that are entirely bespoke and deliberately geared towards bringing instant and high quality professional learning to educators anywhere in the world. We are there for you wherever and whenever you need us.',
  whoweare: {
    header: 'Who we are.',
    content: "Experienced educators, Mary van der Heijden and Helen Barrett founded On Route Education as a service dedicated to helping schools successfully confront the challenges of modern, professional practice.",
  },
}

export default () => (
  <DefaultLayout>
    <Header text={ stuff.header } />
    <Padding>
      <Subheader text={ stuff.subheader } />
      <Paragraph text={ stuff.content } />
    </Padding>
    <Padding>
      <Subheader text={ stuff.whoweare.header } />
      <Paragraph text={ stuff.whoweare.content } />
    </Padding>
  </DefaultLayout>
)

