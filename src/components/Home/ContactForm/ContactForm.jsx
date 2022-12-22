import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { appContext } from "../../../context/UserContext";
import "./ContactForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
  },
};

Modal.setAppElement("#root");

const ContactForm = ({ modalIsOpen, closeModal }) => {
  const { loggedInUser } = useContext(appContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 style={{ color: "orangered" }}>Welcome to repair service</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control my-2"
            defaultValue={loggedInUser.displayName}
            {...register("name")}
          />
          <input
            className="form-control my-2"
            defaultValue={loggedInUser.email}
            {...register("email")}
          />
          <textarea
            placeholder="Message"
            className="form-control my-2"
            {...register("message", { required: true })}
            cols="30"
            rows="10"
          ></textarea>
          {errors.message && (
            <span className="text-danger">This field is required</span>
          )}
          <input className="modal-btn form-control" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default ContactForm;
