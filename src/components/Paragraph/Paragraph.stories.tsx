import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import Paragraph, { ParagraphProps } from "./Paragraph";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  parameters: { layout: "centered" },
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: "This is a paragraph",
};
