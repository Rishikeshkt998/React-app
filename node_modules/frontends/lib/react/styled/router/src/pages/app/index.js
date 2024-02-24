import React from "react";
import { ThemeProvider } from "styled-components";
import CustomRouter from "../../router";
import theme from "../../styledComponents/theme";

import "./app.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="appContainer">
        <CustomRouter />
      </div>
    </ThemeProvider>
  );
};

export default App;
