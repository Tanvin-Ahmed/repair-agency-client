import React from "react";
import { Alert } from "react-bootstrap";

const title = {
  danger: "Error!",
  warning: "Warning!",
  success: "Success!",
  info: "Info!",
};

const CustomAlert = ({ variant, message }) => {
  return (
    <Alert variant={variant}>
      <h2>{title[variant]}</h2>
      <p>{message}</p>
    </Alert>
  );
};

export default CustomAlert;
