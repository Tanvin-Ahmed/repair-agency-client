import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import "./ServiceList.css";

const ServiceList = () => {
  return (
    <section>
      <NavBar />
      <Outlet />
    </section>
  );
};

export default ServiceList;
