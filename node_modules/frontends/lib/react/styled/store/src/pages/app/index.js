import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "../home";
import Content from "../content";
import { Header } from "../../components";
import theme from "../../styledComponents/theme";
import { StoreProvider } from "../../store/StoreProvider";

import "./app.css";

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <div className="appContainer">
          <Header />
          <Home />
          <Content />
        </div>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
