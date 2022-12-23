import React from "react";
import "./RepairDemo.css";

const RepairDemo = () => {
  return (
    <section className="repair-demo">
      <div className="container">
        <div className="header text-center mb-5">
          <h5 style={{ color: "orangered" }}>WORKING WITH EXCELLENT</h5>
          <h1 className="header-color">
            We Repair Everything <br /> That You Need
          </h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div
            className="col"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="card h-100">
              <img
                src="https://mobirise.com/extensions/repairamp/agency/assets/images/02.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Complicated Repair</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="card h-100">
              <img
                src="https://mobirise.com/extensions/repairamp/agency/assets/images/03.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Service Cases</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="card h-100">
              <img
                src="https://mobirise.com/extensions/repairamp/agency/assets/images/04.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Gadget Repair</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairDemo;
