import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getAllReviews } from "../../../apis/reviewApis";
import CustomAlert from "../../Shared/CustomAlert/CustomAlert";
import TestimonialsBody from "../TestimonialsBody/TestimonialsBody";
import "./Testimonials.css";

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "sliderWidth",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

const Testimonials = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      setLoadingSpinner(true);
      const { reviews, errorMessage } = await getAllReviews();
      setReviews(reviews);
      setError(errorMessage);
      setLoadingSpinner(false);
    };

    getReviews();
  }, [setLoadingSpinner]);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="header text-center mb-5">
          <h5 style={{ color: "orangered" }}>TESTIMONIALS</h5>
          <h1 className="header-color">What Our Clients Saying?</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Slider {...settings}>
            {loadingSpinner ? (
              <div className="text-center"></div>
            ) : error ? (
              <CustomAlert message={error} variant={"danger"} />
            ) : reviews.length > 0 ? (
              reviews.map((review) => (
                <TestimonialsBody key={review._id} review={review} />
              ))
            ) : (
              <CustomAlert message={"Give 1st Review!"} variant={"info"} />
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
