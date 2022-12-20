import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { appContext } from "../../../App";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import NavBar from "../../Shared/NavBar/NavBar";
import Payment from "../Payment/Payment";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./ServiceList.css";

const ServiceList = () => {
  const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
  const { category } = useParams();
  const { pathname } = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoadingSpinner(true);
    fetch(`http://localhost:5000/serviceItem/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoadingSpinner(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <NavBar />
      <Routes>
        <Route
          exact
          path={`${pathname}`}
          element={
            <ServiceItem
              key="1"
              url={pathname}
              category={category}
              loadingSpinner={loadingSpinner}
              items={items}
            />
          }
        />
        <Route
          exact
          path={`${pathname}/payment/:id`}
          element={
            <PrivateRoute>
              <Payment key="2" />
            </PrivateRoute>
          }
        />
      </Routes>
    </section>
  );
};

export default ServiceList;
