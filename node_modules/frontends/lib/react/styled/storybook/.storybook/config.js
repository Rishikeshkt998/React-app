import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styledComponents/theme";

import "./storybook.css";

addDecorator((S) => (
  <ThemeProvider theme={theme}>
    <S />
  </ThemeProvider>
));
configure(require.context("../src", true, /\.stories\.js$/), module);
