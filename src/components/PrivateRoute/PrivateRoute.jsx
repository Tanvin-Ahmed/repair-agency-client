import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { appContext } from "../../App";

const PrivateRoute = ({ children }) => {
  const { loggedInUser } = useContext(appContext);
  const location = useLocation();
  const auth = loggedInUser?.email || sessionStorage.getItem("user");

  return auth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
