import React from "react";
import { Outlet } from "react-router-dom";
import OrderSidebar from "../UserOrderSidebar/UserOrderSidebar";

const MyOrder = () => {
  return (
    <section className="myOrder">
      <OrderSidebar />
      <Outlet />
    </section>
  );
};

export default MyOrder;
