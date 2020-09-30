import React from "react";
import HomeTemplate from "./HomeTemplate";

export default {
  title: "Templates/Home",
  component: HomeTemplate,
};

const Template = (args) => <HomeTemplate {...args} />;

export const Example = Template.bind({});
Example.args = {
  heading: "Heading",
  services: {
    heading: "Services Heading",
    paragraph: "Services Paragraph",
    links: [
      {
        link: "/hello",
        text: "Link",
        image:
          "https://images.unsplash.com/photo-1601307002864-31c17961eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",

        color: "red",
      },
      {
        link: "/hello",
        text: "Link",
        image:
          "https://images.unsplash.com/photo-1601307002864-31c17961eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",

        color: "blue",
      },
      {
        link: "/hello",
        text: "Link",
        image:
          "https://images.unsplash.com/photo-1601307002864-31c17961eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",

        color: "orange",
      },
    ],
  },
  who: {
    heading: "Who heading",
    people: [
      {
        name: "Mary",
        title: "Title",
        imageFocus: "center center",
        image:
          "https://images.unsplash.com/photo-1601307002864-31c17961eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      },
      {
        name: "Mary",
        title: "Title",
        imageFocus: "center center",
        image:
          "https://images.unsplash.com/photo-1601307002864-31c17961eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      },
    ],
    paragraph1: "Paragraph1",
    paragraph2: "Paragraph2",
  },
};
