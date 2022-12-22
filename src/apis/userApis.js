import { getDataFromLS, setDataInLS } from "../utils/LocalStorageDB";
import axiosInstance from "./axiosInstance/axiosInstance";

export const getToken = async (data) => {
  try {
    const {
      data: { token },
    } = await axiosInstance.get(
      `/admin/find?email=${data.email}&displayName=${data.displayName}`
    );
    return { token, errorMessage: "" };
  } catch (error) {
    return {
      token: "",
      errorMessage: error.response.data.message || error.message,
    };
  }
};

export const getRefreshToken = async () => {
  try {
    const oldToken = getDataFromLS("user");
    const { data } = await axiosInstance.post(`/admin/refresh-token`, {
      token: oldToken,
    });
    setDataInLS("user", data);
  } catch (error) {
    return {
      token: "",
      errorMessage: error.response.data.message || error.message,
    };
  }
};
