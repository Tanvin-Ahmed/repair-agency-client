import axiosInstance from "./axiosInstance/axiosInstance";

export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/category/all");
    return {
      categories: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      errorMessage: error.response.data.message || error.message,
      categories: [],
    };
  }
};
