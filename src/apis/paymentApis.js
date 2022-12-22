import axiosInstance from "./axiosInstance/axiosInstance";

export const generatePaymentClientSecrate = async (price) => {
  try {
    const {
      data: { clientSecrate },
    } = await axiosInstance.post("/payment/create-payment-intent", { price });

    return {
      clientSecrate,
      errorMessage: null,
    };
  } catch (error) {
    return {
      clientSecrate: null,
      errorMessage: error.response.data.message || error.message,
    };
  }
};
