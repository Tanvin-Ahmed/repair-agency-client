import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./Admin.css";

const Admin = () => {
  return (
    <section className="admin">
      <AdminSidebar />
      <Outlet />
    </section>
  );
};

export default Admin;
