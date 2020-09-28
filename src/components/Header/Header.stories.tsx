import React from "react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = args => <Header {...args} />;

export const Example = Template.bind({});

Example.args = {
  text: "on route education",
  color: "red",
  image:
    "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
};
