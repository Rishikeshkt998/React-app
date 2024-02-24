import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styledComponents/theme";
import { StoreProvider } from "../src/store/StoreProvider";

import "./storybook.css";

addDecorator((S) => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <S />
    </ThemeProvider>
  </StoreProvider>
));
configure(require.context("../src", true, /\.stories\.js$/), module);
