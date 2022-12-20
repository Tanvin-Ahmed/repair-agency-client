import {
  faCommentDots,
  faHome,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./UserOrderSidebar.css";

const OrderSidebar = () => {
  return (
    <div className="order-sidebar">
      <Link className="home-link" to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="header">
        <h4>USER</h4>
      </div>
      <div className="link-list">
        <Link className="sidebar-link" to={`/myOrder`}>
          <FontAwesomeIcon icon={faShoppingBasket} /> Order List
        </Link>
        <Link className="sidebar-link" to={`/myOrder/review`}>
          <FontAwesomeIcon icon={faCommentDots} /> Review
        </Link>
      </div>
    </div>
  );
};

export default OrderSidebar;
