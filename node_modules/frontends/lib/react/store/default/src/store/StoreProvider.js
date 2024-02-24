import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const StoreContext = createContext();
const initState = {
  homePageName: "Home",
  contentPageName: "Content",
};
const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
export { StoreContext, StoreProvider };
