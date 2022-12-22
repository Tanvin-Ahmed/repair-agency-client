import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { createAdmin } from "../../../apis/adminApis";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";
import "./MakeAmin.css";

const MakeAdmin = () => {
  const [newAdmin, setNewAdmin] = useState("");
  const [message, setMessage] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = /\S+@\S+\.\S+/.test(e.target.value);

    if (isValid) {
      const { message, errorMessage } = await createAdmin(newAdmin);
      message && setMessage({ message, variant: "success" });
      errorMessage && setMessage({ message: errorMessage, variant: "success" });
      setNewAdmin("");
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
          />
          <button onClick={handleSubmit} className="admin-btn" type="submit">
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
          <div className="mt-3">
            {message.variant ? (
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
