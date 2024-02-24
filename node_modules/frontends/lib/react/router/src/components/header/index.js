import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <Link to="/">Home</Link>
      <Link to="/content">Content</Link>
    </div>
  );
};

export default Header;
