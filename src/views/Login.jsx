import React from "react";
import LoginForm from "../components/LoginForm";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isLoggedIn, handleLogin } = useAuth();
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginData);
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default Login;
