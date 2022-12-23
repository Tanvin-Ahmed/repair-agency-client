import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getAllCategories } from "../../../apis/categoryApis";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";
import ServiceCategory from "../ServiceCategory/ServiceCategory";
import "./Services.css";

const Services = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const allCategory = async () => {
      setLoadingSpinner(true);
      const { categories, errorMessage } = await getAllCategories();
      setCategories(categories);
      setError(errorMessage);
      setLoadingSpinner(false);
    };

    allCategory();
  }, [setLoadingSpinner]);

  return (
    <section className="services">
      <div className="container">
        <div className="header text-center mb-5">
          <h1 className="header-color">Explore Our Services</h1>
          <h5 style={{ color: "orangered" }}>CATEGORY BASED</h5>
        </div>
        {loadingSpinner ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : error ? (
          <CustomAlert variant={"danger"} message={error} />
        ) : categories.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {categories.map((category) => (
              <ServiceCategory key={category._id} category={category} />
            ))}
          </div>
        ) : (
          <CustomAlert variant={"warning"} message={"No Category found!"} />
        )}
      </div>
    </section>
  );
};

export default Services;
