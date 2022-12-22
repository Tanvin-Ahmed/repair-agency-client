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
      <h4>{title[variant]}</h4>
      <p>{message}</p>
    </Alert>
  );
};

export default CustomAlert;
