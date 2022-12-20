import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Review from "../Review/Review";
import OrderList from "../UserOrderList/UserOrderList";
import OrderSidebar from "../UserOrderSidebar/UserOrderSidebar";

const MyOrder = () => {
  const { pathname } = useLocation();
  return (
    <section className="myOrder">
      <OrderSidebar />
      <Routes>
        <Route
          path={`${pathname}`}
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route
          path={`${pathname}/review`}
          element={
            <PrivateRoute>
              <Review />
            </PrivateRoute>
          }
        />
      </Routes>
    </section>
  );
};

export default MyOrder;
