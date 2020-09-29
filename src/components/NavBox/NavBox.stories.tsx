import React from "react";

import NavBox from "./NavBox";

export default {
  title: "Components/NavBox",
  component: NavBox,
};

const Template = args => <NavBox {...args} />;

export const Example = Template.bind({});
Example.args = {
  alignSelf: "center",
  color: "blue",
  slug: "/",
  text: "Hello",
  image:
    "https://images.unsplash.com/photo-1585034353058-576268305fc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=691&q=80",
};

export const MultipleBoxes = () => (
  <>
    <NavBox
      alignSelf="center"
      color="blue"
      image=""
      slug="/home"
      text="Hello"
    />
    <NavBox
      alignSelf="center"
      color="blue"
      image=""
      slug="/home"
      text="Hello"
    />
    <NavBox
      alignSelf="center"
      color="blue"
      image=""
      slug="/home"
      text="Hello"
    />
  </>
);
