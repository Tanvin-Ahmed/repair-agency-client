import axios from "axios";
import { checkTokenSyntax } from "../../utils/getUserInfo";
import { getDataFromLS } from "../../utils/LocalStorageDB";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
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
