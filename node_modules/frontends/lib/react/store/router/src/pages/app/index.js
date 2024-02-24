import React from "react";
import CustomRouter from "../../router";
import { StoreProvider } from "../../store/StoreProvider";

import "./app.css";

const App = () => {
  return (
    <StoreProvider>
      <div className="appContainer">
        <CustomRouter />
      </div>
    </StoreProvider>
  );
};

export default App;
