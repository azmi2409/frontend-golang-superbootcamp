import React from "react";
import { AuthContext } from "../context/AuthContext";
import { userLogin } from "../utils/server";
import toast from "react-hot-toast";

const useAuth = () => {
  const { auth, dispatch } = React.useContext(AuthContext);

  const handleLogin = ({ email, password }) => {
    const res = userLogin({ email, password });
    toast
      .promise(res, {
        loading: "Logging in...",
        success: "Logged in!",
        error: "Failed to login!",
      })
      .then((res) => {
        if (res.token) {
          dispatch({ type: "LOGIN", payload: res.token });
          localStorage.setItem("token", res.token);
        }
      });
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    window.location.reload();
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
