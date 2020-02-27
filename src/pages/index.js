import React from "react"

import Header from "../components/Header.js"
import Subheader from "../components/Subheader.js"
import Paragraph from "../components/Paragraph.js"
import Padding from "../components/Padding.js"
import NavBox from "../components/NavBox.js"
import Person from "../components/Person.js"

import DefaultLayout from "../layouts/DefaultLayout.js"

import { red, blue, orange } from "../utils/colors.js"

const stuff = {
  header: "On Route Education.",
  subheader: "Sustainable solutions for education innovation.",
  content:
    "We lead the competition by offering schools a unique combination of professional coaching and training services that are entirely bespoke and deliberately geared towards bringing instant and high quality professional learning to educators anywhere in the world. We are there for you wherever and whenever you need us.",
  whoweare: {
    header: "Who we are.",
    content:
      "Experienced educators, Mary van der Heijden and Helen Barrett founded On Route Education as a service dedicated to helping schools successfully confront the challenges of modern, professional practice.",
    content2: `Based in the UK, our substantial experience of international education and extensive professional network means we can offer highly bespoke training, consultancy and coaching that effectively brings about positive and sustainable school improvement, leadership development and professional success.

We value our relationships with schools and seek to sustain these as partners proud to be supporting their long-term learning journey`,
  },
}

export default () => (
  <DefaultLayout>
    <Header text={stuff.header} color={red} />
    <Padding>
      <Subheader text={stuff.subheader} />
      <Paragraph text={stuff.content} />
    </Padding>
    <Padding>
      <NavBox
        slug="coaching"
        text="leadership coaching & mentouring"
        color={blue}
      ></NavBox>
      <NavBox
        slug="training"
        text="virtual & in school training & advice"
        color={red}
      ></NavBox>
      <NavBox
        slug="curriculum-development"
        text="curriculum development"
        color={orange}
      ></NavBox>
    </Padding>
    <Padding>
      <Subheader text={stuff.whoweare.header} />
      <Paragraph text={stuff.whoweare.content} />
      <Person
        name="Mary van der Heijden"
        title="Experienced Educator & Founder"
        image="images/uploads/mary-transparent.png"
      />
      <Person
        name="Helen Barrett"
        title="Experienced Educator & Founder"
        image="images/uploads/helen-transparent.png"
      />
      <Paragraph text={stuff.whoweare.content2} />
    </Padding>
  </DefaultLayout>
)
