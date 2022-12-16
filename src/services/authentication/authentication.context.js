import { useState, createContext, useEffect } from "react";

import {
  loginRequest,
  registerRequest,
  checkUserAuth,
  logoutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //TODO: fix unsubscription call
  useEffect(() => {
    const authUnsubscribe = checkUserAuth((checkUser) => {
      if (checkUser) {
        setUser(checkUser);
      }
    });
    return authUnsubscribe;
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((verifiedUser) => {
        setUser(verifiedUser);
        setIsLoading(false);
      })
      .catch((error) => {
        var err = error.code;
        if (err.includes("invalid-email")) {
          err = "Enter a valid email address";
        } else if (err.includes("user-not-found")) {
          err = "Incorrect Email or Password";
        } else if (err.includes("wrong-password")) {
          err = "Incorrect Email or Password";
        }
        setIsLoading(false);
        setError(err);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((verifiedUser) => {
        setUser(verifiedUser);
        setIsLoading(false);
      })
      .catch((error) => {
        var err = error.code;
        if (err.includes("weak-password")) {
          err = "Passwords must be at least 6 characters";
        } else if (err.includes("invalid-email")) {
          err = "Enter a valid email address";
        }
        setIsLoading(false);
        setError(err);
      });
  };

  const onLogout = () => {
    setUser(null);
    logoutRequest();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
