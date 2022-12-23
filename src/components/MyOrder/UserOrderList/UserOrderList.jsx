import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getUserOrderList } from "../../../apis/orderApis";
import { appContext } from "../../../context/UserContext";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";
import "./UserOrderList.css";

const OrderList = () => {
  const { loggedInUser } = useContext(appContext);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [userOrder, setUserOrder] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loggedInUser?.email) return;

    const getOrders = async () => {
      setLoadingSpinner(true);
      const { orderList, errorMessage } = await getUserOrderList(
        loggedInUser?.email
      );
      console.log(orderList, errorMessage);
      setUserOrder(orderList);
      setError(errorMessage);
      setLoadingSpinner(false);
    };

    getOrders();
  }, [loggedInUser?.email]);

  return (
    <div className="order-list">
      <div className="container">
        <h2 className="header-color">Order List</h2>
        <div className="order-list-item">
          {loadingSpinner ? (
            <div className="loadingSpinner">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : error ? (
            <CustomAlert message={error} variant={"danger"} />
          ) : userOrder.length > 0 ? (
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
          ) : (
            <CustomAlert message={"No order available!"} variant={"info"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
