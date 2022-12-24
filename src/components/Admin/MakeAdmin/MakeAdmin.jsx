import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { createAdmin } from "../../../apis/adminApis";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";
import "./MakeAmin.css";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const MakeAdmin = () => {
  const [newAdmin, setNewAdmin] = useState("");
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateEmail(newAdmin)) {
      setLoading(true);
      const { message, errorMessage } = await createAdmin(newAdmin);
      message && setMessage({ message, variant: "success" });
      errorMessage && setMessage({ message: errorMessage, variant: "success" });
      setNewAdmin("");
      setLoading(false);
    } else {
      setMessage({
        message: "Please Inter valid email and try again",
        variant: "warning",
      });
    }
  };

  useEffect(() => {
    setNewAdmin("");
    setMessage({});
  }, []);

  return (
    <div className="make-admin">
      <div className="container rounded admin-form">
        <h2 className="header-color">Add New Admin</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={newAdmin}
            name="email"
            onChange={(e) => setNewAdmin(e.target.value)}
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            style={{ color: "#012B62" }}
            required
          />
          <button onClick={handleSubmit} className="admin-btn" type="submit">
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
          <div className="mt-3">
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : message.variant ? (
              <CustomAlert
                message={message?.message}
                variant={message?.variant}
              />
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
