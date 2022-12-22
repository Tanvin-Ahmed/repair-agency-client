import React from "react";
import { Route, Routes } from "react-router-dom";
import AddService from "../components/Admin/AddService/AddService";
import Admin from "../components/Admin/Admin/Admin";
import MakeAdmin from "../components/Admin/MakeAdmin/MakeAdmin";
import ManageCategoryServiceList from "../components/Admin/ManageServices/ManageCategoryServiceList/ManageCategoryServiceList";
import ManageService from "../components/Admin/ManageServices/ManageService/ManageService";
import OrderList from "../components/Admin/OrderList/OrderList";
import Home from "../components/Home/Home/Home";
import Payment from "../components/Home/Payment/Payment";
import ServiceItem from "../components/Home/ServiceItem/ServiceItem";
import ServiceList from "../components/Home/ServiceList/ServiceList";
import Login from "../components/Login/Login";
import Review from "../components/MyOrder/Review/Review";
import UserOrderList from "../components/MyOrder/UserOrderList/UserOrderList";
import UserPanel from "../components/MyOrder/UserPanel/UserPanel";
import NoMatch from "../components/NoMatch/NoMatch";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:category" element={<ServiceList />}>
        <Route index element={<ServiceItem />} />
        <Route
          exact
          path={`payment/:id`}
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      >
        <Route
          index
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route
          path={`addService`}
          element={
            <PrivateRoute>
              <AddService />
            </PrivateRoute>
          }
        />
        <Route
          path={`makeAdmin`}
          element={
            <PrivateRoute>
              <MakeAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path={`manageService`}
          element={
            <PrivateRoute>
              <ManageService />
            </PrivateRoute>
          }
        />
        <Route
          path={`manageService/:category`}
          element={
            <PrivateRoute>
              <ManageCategoryServiceList />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/myOrder"
        element={
          <PrivateRoute>
            <UserPanel />
          </PrivateRoute>
        }
      >
        <Route
          index
          element={
            <PrivateRoute>
              <UserOrderList />
            </PrivateRoute>
          }
        />
        <Route
          path={`/myOrder/review`}
          element={
            <PrivateRoute>
              <Review />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default Routers;
