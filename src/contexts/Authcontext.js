import React, { createContext, useState } from "react";
import  {Provider} from "react-redux"
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const [loggedIn, setLoggedIn] = useState(!!token);

  const logIn = (data) => {
    window.localStorage.setItem('token', data.token);
    setLoggedIn(true);
    setToken(data.token);
  };

  const logOut = () => {
    window.localStorage.removeItem('token');
    setLoggedIn(false);
    setToken('');
  };

  return (
    <AuthContext.Provider value={{
      loggedIn,
      token,
      logIn,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
