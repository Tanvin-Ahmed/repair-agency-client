import { faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getServicesOfSameCategory } from "../../../apis/serviceApis";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";
import "./ServiceItem.css";

const ServiceItem = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const getServices = async () => {
      setLoadingSpinner(true);
      const { services, errorMessage } = await getServicesOfSameCategory(
        category
      );
      setItems(services);
      setError(errorMessage);
      setLoadingSpinner(false);
    };

    getServices();
  }, [category, setLoadingSpinner]);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="header-color text-center my-4">{category}</h2>
      {loadingSpinner ? (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <CustomAlert message={error} variant={"danger"} />
      ) : items.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {items.map((item) => (
            <div className="col my-3">
              <div className="card card-hover-effect h-100">
                <img
                  src={`data:image/png;base64,${item.image.img}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title header-color">
                    {item.serviceName}
                  </h5>
                  <p className="card-text">{item.description}</p>
                  <h5 className="card-text">Fee: {item.fee} $</h5>
                </div>
                <div className="card-footer">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/services/:category/payment/${item._id}`}
                  >
                    <button
                      type="button"
                      className="form-control serviceList-btn"
                    >
                      Get Service <FontAwesomeIcon icon={faConciergeBell} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CustomAlert message={"No service available!"} variant={"warning"} />
      )}
    </div>
  );
};

export default ServiceItem;
