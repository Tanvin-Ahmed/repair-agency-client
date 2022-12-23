import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { placeOrder } from "../../../apis/orderApis";
import { generatePaymentClientSecrate } from "../../../apis/paymentApis";
import { appContext } from "../../../context/UserContext";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";

import "./PaymentForm.css";

const PaymentForm = ({ chosenItem }) => {
  const { loggedInUser } = useContext(appContext);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [clientSecrate, setClientSecrate] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    if (!chosenItem?.fee) return;

    const getclientSecrate = async () => {
      const { clientSecrate, errorMessage } =
        await generatePaymentClientSecrate(chosenItem?.fee);

      !errorMessage && setClientSecrate(clientSecrate);
    };

    getclientSecrate();
  }, [chosenItem?.fee]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    const { paymentIntent, error: confermError } =
      await stripe.confirmCardPayment(clientSecrate, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
          },
        },
      });

    if (error || confermError) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentError(null);
      // console.log('payment', paymentMethod);

      if (chosenItem) {
        const newOrder = {
          email: loggedInUser?.email,
          userName: loggedInUser?.displayName,
          paymentId: paymentMethod?.id,
          category: chosenItem.category,
          serviceName: chosenItem?.serviceName,
          fee: chosenItem?.fee,
          status: "Pending",
          date: new Date().toLocaleString(),
        };
        setLoadingSpinner(true);

        const { order, errorMessage } = await placeOrder(newOrder);
        if (errorMessage) {
          setPaymentError("Something went wrong, please try again");
        } else {
          setPaymentSuccess(paymentMethod.id);
          setLoadingSpinner(false);
        }
      } else {
        alert("Choose service first");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control my-2"
          value={loggedInUser.displayName}
          placeholder={"Name"}
        />
        <input
          type="email"
          className="form-control my-2"
          value={loggedInUser.email}
          placeholder={"Email"}
        />
        <input
          type="text"
          className="form-control my-2"
          value={chosenItem?.serviceName}
          placeholder={"Service Name"}
        />
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button
          variant="warning"
          className="form-control mt-4 mb-3"
          style={{ background: "orangered" }}
          type="submit"
          disabled={!stripe || !clientSecrate || loadingSpinner}
        >
          {loadingSpinner && (
            <Spinner animation="grow" variant="warning" size="sm" />
          )}{" "}
          Pay {chosenItem?.fee}$
        </Button>
      </form>
      {paymentError && (
        <CustomAlert message={paymentError} variant={"danger"} />
      )}
      {paymentSuccess && (
        <CustomAlert message={"Payment was successful!"} variant={"success"} />
      )}
    </div>
  );
};

export default PaymentForm;
