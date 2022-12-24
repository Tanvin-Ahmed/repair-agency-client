import axios from "axios";
import { checkTokenSyntax } from "../../utils/getUserInfo";
import { getDataFromLS } from "../../utils/LocalStorageDB";

const axiosInstance = axios.create({
  baseURL: "https://repair-agency-server.vercel.app",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getDataFromLS("user");
    if (checkTokenSyntax(token)) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
