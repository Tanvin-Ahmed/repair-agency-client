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
      services: data || [],
      errorMessage: null,
    };
  } catch (error) {
    return {
      services: [],
      errorMessage: error.response.data.message || error.message,
    };
  }
};

export const getServiceById = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/service/${id}`);
    return {
      service: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      service: {},
      errorMessage: error.response.data.message || error.message,
    };
  }
};

export const getServiceByIdWithoutImg = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `/service/service-without-img/${id}`
    );
    return {
      service: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      service: {},
      errorMessage: error.response.data.message || error.message,
    };
  }
};

export const updateService = async (id, info) => {
  try {
    const { data } = await axiosInstance.put(`/service/update/${id}`, info);

    return {
      service: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      service: {},
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
