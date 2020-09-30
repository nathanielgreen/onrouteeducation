import React from "react";
import Person from "./Person";

export default {
  title: "Components/Person",
  component: Person,
};

const Template = (args) => <Person {...args} />;

export const Example = Template.bind({});
Example.args = {
  name: "Mary van der Heijden",
  title: "Experienced Educator and Founder",
  imageFocus: "center center",
  image:
    "https://images.unsplash.com/photo-1601307002864-31c17961eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
};
