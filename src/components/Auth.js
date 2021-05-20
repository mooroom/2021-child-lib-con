import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [pending, setPending] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      // setPending(false);
    });
  }, []);

  // if (pending) {
  //   return <div>loading...</div>;
  // }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
