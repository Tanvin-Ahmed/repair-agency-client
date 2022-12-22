import jwt_decode from "jwt-decode";
import { getDataFromLS } from "./LocalStorageDB";

export const checkTokenSyntax = (token = "") => {
  const pattern =
    /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/gi.test(token);

  return pattern;
};

export const getUserInfo = () => {
  const token = getDataFromLS("user");

  if (token && checkTokenSyntax(token)) {
    const { data } = jwt_decode(token);

    return data;
  }
  return {};
};
