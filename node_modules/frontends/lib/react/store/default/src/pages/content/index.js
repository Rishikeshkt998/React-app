import React, { useContext } from "react";
import searchHelper from "search-helper"; // usage details => https://www.npmjs.com/package/search-helper
import { StoreContext } from "../../store/StoreProvider";
import { CONTENT_PAGE_NAME } from "../../store/actions";

import "./content.css";

const Content = () => {
  const { state, dispatch } = useContext(StoreContext);
  const changeName = () => {
    dispatch({
      type: CONTENT_PAGE_NAME,
      payload: "Content " + Math.floor(Math.random() * 100),
    });
  };
  const list = [
    { name: "emre", bio: { type: "human" } },
    { name: "george floyd", bio: { type: "human" } },
    { name: "helin", bio: { type: "afeti-devran" } },
  ];
  const filteredList = () => {
    let condition = {
      bio: {
        type: "human",
      },
    };
    return searchHelper(list, condition).map((item) => <h4>{item.name}</h4>);
  };
  return (
    <div id="contentContainer">
      <h1>{state.contentPageName}</h1>
      <button onClick={changeName}>Change Name</button>
      {filteredList()}
    </div>
  );
};

export default Content;
