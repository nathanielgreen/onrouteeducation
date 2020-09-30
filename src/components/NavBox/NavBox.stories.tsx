import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import NavBox, { NavBoxProps } from "./NavBox";

export default {
  title: "Components/NavBox",
  component: NavBox,
  argTypes: {
    text: { description: "The text that appears on the box." },
    color: {
      description:
        "The color overlay that appears behind the text but in front of the image at 85% opacity",
    },
    slug: {
      description: "The internal link that clicking the box will lead to",
    },
    image: { description: "The background-image behind the colors of the box" },
    alignSelf: { description: "The horizontal alignment of the box" },
  },
} as Meta;

const Template: Story<NavBoxProps> = (args) => <NavBox {...args} />;

export const Example = Template.bind({});
Example.parameters = { layout: "centered" };
Example.args = {
  alignSelf: "center",
  color: "blue",
  slug: "/",
  text: "Hello",
  image:
    "https://images.unsplash.com/photo-1585034353058-576268305fc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=691&q=80",
};

export const MultipleBoxesExample = () => (
  <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 850,
        margin: "0 auto",
      }}
    >
      <NavBox
        alignSelf="flex-start"
        color="red"
        image=""
        slug="/home"
        text="Box 1"
      />
      <NavBox
        alignSelf="center"
        color="blue"
        image=""
        slug="/home"
        text="Box 2"
      />
      <NavBox
        alignSelf="flex-end"
        color="orange"
        image=""
        slug="/home"
        text="Box 3"
      />
    </div>
  </>
);
