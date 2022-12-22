import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { appContext } from "../../../context/UserContext";
import TestimonialsBody from "../TestimonialsBody/TestimonialsBody";
import "./Testimonials.css";

const Testimonials = () => {
  const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    setLoadingSpinner(true);
    fetch("http://localhost:5000/getAllReview")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoadingSpinner(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
            ) : (
              reviews.map((review) => (
                <TestimonialsBody key={review._id} review={review} />
              ))
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
