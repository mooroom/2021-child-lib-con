import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Sub from "./pages/Sub";
import AdminPaint from "./pages/AdminPaint";
import AdminPhoto from "./pages/AdminPhoto";
import AdminSns from "./pages/AdminSns";
import Admin from "./pages/Admin";

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
      <Route path="/admin.paint" component={AdminPaint} />
      <Route path="/admin.photo" component={AdminPhoto} />
      <Route path="/admin.sns" component={AdminSns} />
      <Route path="/admin" component={Admin} />
    </Router>
  );
}

export default App;
