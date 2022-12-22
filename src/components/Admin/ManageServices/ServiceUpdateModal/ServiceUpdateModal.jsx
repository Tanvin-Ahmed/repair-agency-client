import React from "react";
import { useForm } from "react-hook-form";
import { updateService } from "../../../../apis/serviceApis";
import "./ServiceUpdateModal.css";

const ServiceUpdateModal = ({ chosenService, setService }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const item = {
      serviceName: data.serviceName,
      fee: data.fee,
      description: data.description,
    };

    const { service, errorMessage } = await updateService(
      chosenService._id,
      item
    );

    if (errorMessage) {
      alert(errorMessage);
    } else {
      setService((prev) => {
        const list = prev;
        const index = list.findIndex((item) => item._id === service._id);
        list.splice(index, 1, service);
        return list;
      });
      alert("Update successfully");
    }
  };

  return (
    <div className="container rounded admin-form">
      <h5 className="mb-3" style={{ color: "orangered" }}>
        UPDATE SERVICE
      </h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control my-2"
          defaultValue={chosenService?.serviceName}
          {...register("serviceName")}
        />
        <input
          className="form-control my-2"
          defaultValue={chosenService?.fee}
          {...register("fee")}
        />
        <textarea
          className="form-control my-2"
          defaultValue={chosenService?.description}
          {...register("description")}
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" className="admin-btn" />
      </form>
    </div>
  );
};

export default ServiceUpdateModal;
