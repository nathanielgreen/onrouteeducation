import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import Subheader, { SubheaderProps } from "./Subheader";

export default {
  title: "Components/Subheader",
  component: Subheader,
} as Meta;

const Template: Story<SubheaderProps> = (args) => <Subheader {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: "This is a subheader",
};
