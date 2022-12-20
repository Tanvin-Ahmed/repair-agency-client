import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AddService from "../AddService/AddService";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageService from "../ManageServices/ManageService/ManageService";
import OrderList from "../OrderList/OrderList";
import "./Admin.css";

const Admin = () => {
  const { pathname } = useLocation();
  return (
    <section className="admin">
      <AdminSidebar />
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
          path={`${pathname}/addService`}
          element={
            <PrivateRoute>
              <AddService />
            </PrivateRoute>
          }
        />
        <Route
          path={`${pathname}/makeAdmin`}
          element={
            <PrivateRoute>
              <MakeAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path={`${pathname}/manageService`}
          element={
            <PrivateRoute>
              <ManageService />
            </PrivateRoute>
          }
        />
      </Routes>
    </section>
  );
};

export default Admin;
