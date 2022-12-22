import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAllCategoriesName } from "../../../apis/categoryApis";
import { createService } from "../../../apis/serviceApis";
import { appContext } from "../../../context/UserContext";
import "./AddService.css";

const AddService = () => {
  const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState(null);
  const [allCategory, setAllCategory] = useState([]);

  const handleFile = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = async (data) => {
    if (data.selectedCategory === "" && data.addCategory === "") {
      alert("Select Category or Add new one");
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", data.selectedCategory);
      formData.append("newCategory", data.addCategory);
      formData.append("serviceName", data.serviceName);
      formData.append("description", data.description);
      formData.append("fee", data.fee);

      const { message, errorMessage } = await createService(formData);
      await handleCategorySelect();

      alert(message || errorMessage);
    }
  };

  const handleCategorySelect = async () => {
    setLoadingSpinner(true);
    const { categoriesName, errorMessage } = await getAllCategoriesName();
    setLoadingSpinner(false);
    setAllCategory(categoriesName);
    errorMessage && alert(errorMessage);
  };

  useEffect(() => {
    handleCategorySelect();
  }, []);

  return (
    <div className="add-service">
      <div className="container admin-form rounded">
        <h2 className="header-color">Add Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-5 my-2">
              <select
                {...register("selectedCategory")}
                className="form-control"
              >
                <option value="">
                  Category {loadingSpinner && "Loading..."}
                </option>
                {allCategory.map((category) => (
                  <option key={category._id} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2 my-2">
              <h5 className="header-color text-center">OR</h5>
            </div>
            <div className="col-md-5 my-2">
              <input
                className="form-control"
                {...register("addCategory")}
                placeholder="Add new Category"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control my-2"
                {...register("serviceName", { required: true })}
                placeholder="Service Name"
              />
              {errors.serviceName && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-md-6">
              <input
                className="form-control my-2"
                {...register("fee", { required: true })}
                placeholder="Service Fee"
              />
              {errors.fee && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <textarea
            className="form-control my-2"
            {...register("description", { required: true })}
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <span className="text-danger">This field is required</span>
          )}

          <div>
            <input onChange={handleFile} id="file" type="file" />
            <label className="img-btn form-control text-center" htmlFor="file">
              <FontAwesomeIcon icon={faImage} /> Choose an image
            </label>
          </div>
          <br />
          <input type="submit" value="Add" className="admin-btn" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
