import jwt_decode from "jwt-decode";
import { getDataFromLS } from "./LocalStorageDB";

const checkTokenSyntax = (token = "") => {
  const pattern =
    /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/gi.test(token);

  return pattern;
};

export const checkToken = () => {
  const token = getDataFromLS("user");
  if (!token) return false;

  const pattern = checkTokenSyntax(token);

  if (pattern) {
    const { exp } = jwt_decode(token);
    if (Date.now() >= exp * 1000) {
      return false;
    }
    return true;
  }

  return false;
};
