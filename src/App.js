import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";
import Sub1 from "./pages/Sub1";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  *,:after,:before {
    box-sizing: border-box;
  }
`;

function App() {
  const appHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  appHeight();
  window.addEventListener("resize", appHeight);

  return (
    <Router>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/sub1" component={Sub1} />
    </Router>
  );
}

export default App;
