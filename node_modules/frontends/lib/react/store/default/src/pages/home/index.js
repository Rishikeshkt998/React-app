import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { HOME_PAGE_NAME } from "../../store/actions";

import "./home.css";

const Home = () => {
  const { state, dispatch } = useContext(StoreContext);
  const changeName = () => {
    dispatch({
      type: HOME_PAGE_NAME,
      payload: "Content " + Math.floor(Math.random() * 100),
    });
  };
  return (
    <div id="homeContainer">
      <h1>{state.homePageName}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Home;
