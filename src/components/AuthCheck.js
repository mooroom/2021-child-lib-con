import React, { useContext } from "react";
import { AuthProvider } from "./Auth";

export const AuthCheck = ({ children, fallback }) => {
  const user = useContext(AuthProvider);

  return user ? <>{children}</> : <>{fallback}</>;
};
