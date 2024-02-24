import React from "react";
import Home from "../home";
import Content from "../content";
import { Header } from "../../components";
import { StoreProvider } from "../../store/StoreProvider";

import "./app.css";

const App = () => {
  return (
    <StoreProvider>
      <div className="appContainer">
        <Header />
        <Home />
        <Content />
      </div>
    </StoreProvider>
  );
};

export default App;
