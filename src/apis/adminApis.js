import axiosInstance from "./axiosInstance/axiosInstance";

export const createAdmin = async (email) => {
  try {
    const { data } = await axiosInstance.post("/admin/create", {
      newAdmin: email,
    });

    return {
      message: data.message,
      errorMessage: null,
    };
  } catch (error) {
    return {
      message: null,
      errorMessage: error.response.data.message || error.message,
    };
  }
};
