import React from "react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = args => <Footer {...args} />;

export const Example = Template.bind({});
Example.args = {
  heading: "We love to talk.",
  subheading:
    "Get in touch for an initial conversation about your professional and educational needs.",
  email: "hello@onrouteeducation.com",
};
