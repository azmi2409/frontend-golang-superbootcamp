import React from "react";
import { AuthContext } from "../context/AuthContext";
import { userLogin } from "../utils/server";

const useAuth = () => {
  const { auth, dispatch } = React.useContext(AuthContext);

  const handleLogin = async ({ email, password }) => {
    const res = await userLogin({ email, password });
    if (res.token) {
      dispatch({ type: "LOGIN", payload: res.token });
      localStorage.setItem("token", res.token);
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
  };

  const isLoggedIn = React.useMemo(() => {
    return !!auth.token;
  }, [auth.token]);

  const getToken = React.useMemo(() => {
    return auth.token;
  }, [auth.token]);

  return { isLoggedIn, handleLogin, handleLogout, getToken };
};

export default useAuth;
