import axiosInstance from "./axiosInstance/axiosInstance";

export const getAllReviews = async () => {
  try {
    const { data } = await axiosInstance.get("/review/getAll");

    return {
      reviews: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      reviews: [],
      errorMessage: error.response.data.message || error.message,
    };
  }
};
