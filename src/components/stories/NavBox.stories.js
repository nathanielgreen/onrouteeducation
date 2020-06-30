import React from "react";

import NavBox, { MultiBoxWrapper } from "../NavBox.js";

export default {
  title: "Components/NavBox",
  component: NavBox,
};

export const Example = () => (
  <NavBox alignSelf="center" color="blue" image="" to="/home" text="Hello" />
);

export const MultipleBoxes = () => (
  <>
    <NavBox alignSelf="center" color="blue" image="" to="/home" text="Hello" />
    <NavBox alignSelf="center" color="blue" image="" to="/home" text="Hello" />
    <NavBox alignSelf="center" color="blue" image="" to="/home" text="Hello" />
  </>
);
