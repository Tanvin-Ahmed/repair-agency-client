import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { appContext } from "../../../App";
import "./Review.css";

const Review = () => {
  const { loggedInUser } = useContext(appContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newReview = { ...data };
    newReview.image = loggedInUser.photoURL;

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newReview }),
    })
      .then((response) => response.json())
      .then((data) => alert("Thanks for Review"))
      .catch((err) => alert("Something is wrong, please try again"));
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
