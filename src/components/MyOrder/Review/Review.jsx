import React, { useContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addReview } from "../../../apis/reviewApis";
import { appContext } from "../../../context/UserContext";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";
import "./Review.css";

const Review = () => {
  const { loggedInUser } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const newReview = { ...data };
    newReview.image = loggedInUser?.photoURL;
    newReview.email = loggedInUser?.email;

    const { message, errorMessage } = await addReview(newReview);
    setMessage(message);
    setError(errorMessage);
    setLoading(false);
  };
  return (
    <div className="review">
      <div className="container">
        <div className="review-form rounded">
          <h2 className="header-color">Give a Review</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <input
                  className="form-control my-2"
                  defaultValue={loggedInUser?.displayName}
                  {...register("name", { required: true })}
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="col-md-6">
                <input
                  className="form-control my-2"
                  placeholder="Rating Number"
                  {...register("rate", { required: true })}
                />
                {errors.rate && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
            <textarea
              placeholder="Review"
              className="form-control my-2"
              cols="30"
              rows="10"
              {...register("review", { required: true })}
            ></textarea>
            {errors.review && (
              <span className="text-danger">This field is required</span>
            )}
            <br />
            <input type="submit" className="review-btn" />

            <div className="mt-4">
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : error ? (
                <CustomAlert message={error} variant={"danger"} />
              ) : message ? (
                <CustomAlert message={message} variant={"success"} />
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
