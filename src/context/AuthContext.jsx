import React from "react";
import { authReducer, initialState } from "../stores/Auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        auth,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
