import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { checkToken } from "../../utils/checkToken";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const auth = checkToken();

  return auth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
