import React from "react";
import searchHelper from "search-helper"; // usage details => https://www.npmjs.com/package/search-helper

import "./content.css";

const Content = () => {
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
      <h1>Content</h1>
      {filteredList()}
    </div>
  );
};

export default Content;
