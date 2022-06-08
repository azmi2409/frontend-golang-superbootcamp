import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { isLoggedIn, handleLogout } = useAuth();

  React.useEffect(() => {
    handleLogout();
  }, []);

  return <Navigate to="/" />;
};

export default Logout;
