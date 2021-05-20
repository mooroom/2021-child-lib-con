import React, { useContext } from "react";
import { AuthProvider } from "../components/Auth";
import { Redirect } from "react-router";

function Test(props) {
  const user = useContext(AuthProvider);

  if (!user) {
    console.log("no user");
    return <Redirect to="/login" />;
  }
  return <div>Hello!</div>;
}

export default Test;
