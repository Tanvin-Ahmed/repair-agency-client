import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getServiceById } from "../../../apis/serviceApis";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";
import PaymentForm from "../PaymentForm/PaymentForm";
import "./Payment.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = () => {
  const { id } = useParams();
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [chosenItem, setChosenItem] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getService = async () => {
      setLoadingSpinner(true);
      const { service, errorMessage } = await getServiceById(id);
      setError(errorMessage);
      setChosenItem(service);
      setLoadingSpinner(false);
    };

    getService();
  }, [id, setLoadingSpinner]);

  return (
    <div className="payment">
      {loadingSpinner ? (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <CustomAlert message={error} variant={"danger"} />
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
