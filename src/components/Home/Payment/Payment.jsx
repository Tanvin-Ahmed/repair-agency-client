import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { appContext } from "../../../App";
import PaymentForm from "../PaymentForm/PaymentForm";
import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51IeC0ZDONHijbFR8TfUiYsgD8mSBdBFGuaElmBH5pf3Fcq48BdfCwHsaoOY2Bu37L5gJ0WKUTI4W329jYEw6IoFa00MyqcX5tN"
);

const Payment = () => {
  const { id } = useParams();
  const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
  const [chosenItem, setChosenItem] = useState({});

  useEffect(() => {
    setLoadingSpinner(true);
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setChosenItem(data);
        setLoadingSpinner(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="payment">
      {loadingSpinner ? (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="container rounded">
          <h2 style={{ color: "orangered" }} className="text-center mb-3">
            PAYMENT
          </h2>
          <Elements stripe={stripePromise}>
            <PaymentForm chosenItem={chosenItem} />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Payment;
