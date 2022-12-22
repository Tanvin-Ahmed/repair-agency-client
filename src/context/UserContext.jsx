import React, { createContext, useEffect, useState } from "react";
import { getRefreshToken } from "../apis/userApis";
import { getUserInfo } from "../utils/getUserInfo";

export const appContext = createContext();

const UserContext = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    setLoggedInUser(getUserInfo());
  }, []);

  useEffect(() => {
    getRefreshToken();
  }, []);

  return (
    <appContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        loadingSpinner,
        setLoadingSpinner,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default UserContext;
