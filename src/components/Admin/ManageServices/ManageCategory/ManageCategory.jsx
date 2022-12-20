import { faSignInAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ManageCategory.css";

const ManageCategory = ({ category, getAllCategory }) => {
  const { pathname } = useLocation();
  const handleDeleteCategory = (category) => {
    fetch("https://serene-caverns-03356.herokuapp.com/deleteCategory", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category }),
    })
      .then((res) => res.json())
      .then((data) => getAllCategory())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="manage-category rounded my-2">
        {category}
        <div className="icon">
          <Link to={`${pathname}/${category}`}>
            <button type="button" className="btn btn-outline-info">
              <FontAwesomeIcon className="edit-icon" icon={faSignInAlt} />
            </button>{" "}
          </Link>
          <button
            onClick={() => handleDeleteCategory(category)}
            type="button"
            className="btn btn-outline-danger"
          >
            <FontAwesomeIcon className="delete-icon" icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
