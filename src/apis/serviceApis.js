import axiosInstance from "./axiosInstance/axiosInstance";

export const createService = async (info) => {
  try {
    const { data } = await axiosInstance.post("/service/add", info);
    const { message } = data;
    return {
      message,
      errorMessage: null,
    };
  } catch (error) {
    return {
      message: null,
      errorMessage: error.response.data.message || error.message,
    };
  }
};
