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

export const getServicesOfSameCategory = async (category) => {
  try {
    const { data } = await axiosInstance.get(
      `/service/serviceItem/${category}`
    );
    return {
      services: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      services: [],
      errorMessage: error.response.data.message || error.message,
    };
  }
};

export const deleteService = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `/service/deleteServiceItem/${id}`
    );
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
