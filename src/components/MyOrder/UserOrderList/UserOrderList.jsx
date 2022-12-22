import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { appContext } from "../../../context/UserContext";
import "./UserOrderList.css";

const OrderList = () => {
  const { loggedInUser, loadingSpinner, setLoadingSpinner } =
    useContext(appContext);
  const [userOrder, setUserOrder] = useState([]);
  useEffect(() => {
    setLoadingSpinner(true);
    fetch(`http://localhost:5000/userOrderList/${loggedInUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserOrder(data);
        setLoadingSpinner(false);
      })
      .catch((err) => console.log(err));
  }, [loggedInUser]);

  return (
    <div className="order-list">
      <div className="container">
        <h2 className="header-color">Order List</h2>
        <div className="order-list-item">
          {loadingSpinner ? (
            <div className="loadingSpinner">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {userOrder.map((order) => (
                <div className="col my-2">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title header-color">
                        Name: {order?.serviceName}
                      </h5>
                      <h6 className="card-text" style={{ color: "orangered" }}>
                        Category: {order?.category}
                      </h6>
                      <p>Fee: {order.fee}$</p>
                      <small className="text-muted">Date: {order?.date}</small>
                    </div>
                    <div
                      className={`card-footer text-center ${
                        (order?.status === "Pending" && "pendingBg") ||
                        (order?.status === "On going" && "ongoingBg") ||
                        (order?.status === "Done" && "doneBg")
                      }`}
                    >
                      <h6
                        className={`${
                          (order?.status === "Pending" && "pendingText") ||
                          (order?.status === "On going" && "ongoingText") ||
                          (order?.status === "Done" && "doneText")
                        }`}
                      >
                        {order?.status}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
