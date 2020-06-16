import React from "react";
import Header from "./Header.js";

import { red } from "../utils/colors.js";

export default {
  title: "Components/Header",
  component: Header,
};

export const Example = () => (
  <Header text="This is the header text" color={red} image="" />
);
