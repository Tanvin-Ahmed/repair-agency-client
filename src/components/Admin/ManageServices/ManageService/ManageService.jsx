import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { appContext } from "../../../../context/UserContext";

import ManageCategory from "../ManageCategory/ManageCategory";
import "./ManageService.css";

const ManageService = () => {
  const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
  const [allCategory, setAllCategory] = useState([]);

  const getAllCategory = () => {
    setLoadingSpinner(true);
    fetch("http://localhost:5000/getAllCategory")
      .then((res) => res.json())
      .then((data) => {
        setAllCategory(data);
        setLoadingSpinner(false);
      })
      .catch((err) => console.log(err));
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
        ) : (
          <div className="category">
            <h5 style={{ color: "orangered" }}>Manage Category</h5>
            {allCategory?.map((category) => (
              <ManageCategory
                key={category._id}
                category={category.category}
                getAllCategory={getAllCategory}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageService;
