import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getAllCategoriesName } from "../../../../apis/categoryApis";
import CustomAlert from "../../../Shared/CustomAlert/CustomAlert";

import ManageCategory from "../ManageCategory/ManageCategory";
import "./ManageService.css";

const ManageService = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [error, setError] = useState(null);

  const getAllCategory = async () => {
    setLoadingSpinner(true);
    const { categoriesName, errorMessage } = await getAllCategoriesName();
    !errorMessage && setAllCategory(categoriesName);
    errorMessage && setError(errorMessage);
    setLoadingSpinner(false);
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div className="manage-service">
      <div className="container">
        <h2 className="header-color">Manage Service</h2>
        {loadingSpinner ? (
          <div className="loadingSpinner">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : error ? (
          <CustomAlert message={error} variant={"danger"} />
        ) : allCategory.length > 0 ? (
          <div className="category">
            <h5 style={{ color: "orangered" }}>Manage Category</h5>
            {allCategory?.map((category) => (
              <ManageCategory
                key={category._id}
                category={category.category}
                setAllCategory={setAllCategory}
              />
            ))}
          </div>
        ) : (
          <CustomAlert message={"No Category Found!"} variant={"warning"} />
        )}
      </div>
    </div>
  );
};

export default ManageService;
