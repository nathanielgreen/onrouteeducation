import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import Header, { HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    text: {
      description: "The text that will appear in the header",
    },
    color: {
      description:
        "The color of the overlay. Sits in front of the image but behind the text. Can be a present color from the theme, or any hexcode/rgba string.",
    },
    image: {
      description: "The background-image behind the overlay.",
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const PresetColors = Template.bind({});
PresetColors.argTypes = {
  color: {
    control: {
      type: "select",
      options: ["red", "blue", "orange"],
    },
  },
};
PresetColors.args = {
  text: "on route education",
  color: "red",
  image:
    "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
};

export const AnyColor = Template.bind({});
AnyColor.argTypes = {
  color: {
    control: "color",
  },
};
AnyColor.args = {
  ...PresetColors.args,
  color: "#0C0C0C",
};
