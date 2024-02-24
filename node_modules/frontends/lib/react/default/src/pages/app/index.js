import React from "react";
import Home from "../home";
import Content from "../content";
import { Header } from "../../components";

import "./app.css";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <Home />
      <Content />
    </div>
  );
};

export default App;
