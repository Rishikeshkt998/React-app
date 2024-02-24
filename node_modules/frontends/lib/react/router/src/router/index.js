import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../pages/home";
import Content from "../pages/content";
import Header from "../components/header";

const CustomRouter = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Content} path="/content" exact />
        <Redirect to="/" />
      </Switch>
    </>
  </Router>
);
export default CustomRouter;
