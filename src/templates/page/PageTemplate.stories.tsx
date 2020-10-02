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
  html: `
  <p>Hello there</p>
  <img src="https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <ul>
  <li>Unordered List Item 1</li>
  <li>Unordered List Item 2</li>
  </ul>
  `,
};
