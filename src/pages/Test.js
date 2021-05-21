import React, { useState, useEffect } from "react";
import { AuthProvider } from "../components/Auth";
import { Redirect } from "react-router";
import { auth } from "../firebase";

function Test(props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  // if (!currentUser) {
  //   console.log("no user");
  //   return <Redirect to="/login" />;
  // }
  return <div>Hello!</div>;
}

export default Test;
