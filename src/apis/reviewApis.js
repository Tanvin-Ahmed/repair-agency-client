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

export const addReview = async (info) => {
  try {
    await axiosInstance.post("/review/add", info);

    return {
      message: "Review added successfully!",
      errorMessage: null,
    };
  } catch (error) {
    return {
      message: null,
      errorMessage: error.response.data.message || error.message,
    };
  }
};
