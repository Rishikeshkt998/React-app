import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { StoreProvider } from "../src/store/StoreProvider";

import "./storybook.css";

addDecorator((S) => (
  <StoreProvider>
    <S />
  </StoreProvider>
));
configure(require.context("../src", true, /\.stories\.js$/), module);
