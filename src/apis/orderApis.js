import axiosInstance from "./axiosInstance/axiosInstance";

export const getOrderList = async () => {
  try {
    const { data } = await axiosInstance.get("/order/getFullOrderList");

    return {
      orderList: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      orderList: [],
      errorMessage: error.response.data.message || error.message,
    };
  }
};

export const getUserOrderList = async (email) => {
  try {
    const { data } = await axiosInstance.get(`/order/userOrderList/${email}`);

    return {
      orderList: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      orderList: [],
      errorMessage: error.response.data.message || error.message,
    };
  }
};

export const updateOrderStatus = async (id, value) => {
  try {
    const { data } = await axiosInstance.put(`/order/updateStatus/${id}`, {
      value,
    });

    return {
      order: data,
      errorMessage: null,
    };
  } catch (error) {
    return {
      order: {},
      errorMessage: error.response.data.message || error.message,
    };
  }
};
