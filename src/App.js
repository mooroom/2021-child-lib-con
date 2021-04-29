import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";
import Sub from "./pages/Sub";

function App() {
  const appHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  appHeight();
  window.addEventListener("resize", appHeight);

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/sub/:pagename" component={Sub} />
    </Router>
  );
}

export default App;
