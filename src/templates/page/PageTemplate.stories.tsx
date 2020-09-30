import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import PageTemplate, { PageTemplateProps } from "./PageTemplate";

export default {
  title: "Templates/Page",
  component: PageTemplate,
} as Meta;

const Template: Story<PageTemplateProps> = (args) => <PageTemplate {...args} />;

export const Example = Template.bind({});
Example.args = {
  frontmatter: {
    color: "red",
    title: "This is the page title",
    image:
      "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  html: `<p>Hello there</p>`,
};
