import { faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { appContext } from "../../../App";
import "./ServiceItem.css";

const ServiceItem = () => {
  const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!category) return;

    setLoadingSpinner(true);
    fetch(`http://localhost:5000/serviceItem/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoadingSpinner(false);
      })
      .catch((err) => console.log(err));
  }, [category, setLoadingSpinner]);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="header-color text-center my-4">{category}</h2>
      {loadingSpinner ? (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {items.map((item) => (
            <div class="col my-3">
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
      )}
    </div>
  );
};

export default ServiceItem;
