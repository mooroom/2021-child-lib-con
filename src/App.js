import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Sub from "./pages/Sub";
import Awards from "./pages/Awards";
import AdminPaint from "./pages/AdminPaint";
import AdminPhoto from "./pages/AdminPhoto";
import AdminSns from "./pages/AdminSns";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Test from "./pages/Test";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

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
      <Route path="/awards/:pagename" component={Awards} />
      <AuthProvider>
        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="/admin.paint" component={AdminPaint} />
        <PrivateRoute path="/admin.photo" component={AdminPhoto} />
        <PrivateRoute path="/admin.sns" component={AdminSns} />
        <Route path="/login" component={Login} />
      </AuthProvider>
    </Router>
  );
}

export default App;
