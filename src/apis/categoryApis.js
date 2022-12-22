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

export const getAllCategoriesName = async () => {
  try {
    const { data } = await axiosInstance.get("/category/all-name");
    return {
      categoriesName: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      errorMessage: error.response.data.message || error.message,
      categoriesName: [],
    };
  }
};

export const deleteCategory = async (category) => {
  try {
    const { data } = await axiosInstance.delete(
      `/category/deleteCategory/${category}`
    );
    return {
      message: data.message,
      errorMessage: null,
    };
  } catch (error) {
    return {
      errorMessage: error.response.data.message || error.message,
      message: null,
    };
  }
};
