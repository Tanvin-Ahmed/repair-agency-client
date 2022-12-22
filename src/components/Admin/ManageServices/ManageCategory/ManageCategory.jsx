import { faSignInAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../../../apis/categoryApis";
import "./ManageCategory.css";

const ManageCategory = ({ category, setAllCategory }) => {
  const handleDeleteCategory = async (category) => {
    const { message, errorMessage } = await deleteCategory(category);
    if (message) {
      setAllCategory((prev) => prev.filter((c) => c.category === category));
    }
    if (errorMessage) {
      alert(errorMessage);
    }
  };

  return (
    <div>
      <div className="manage-category rounded my-2">
        {category}
        <div className="icon">
          <Link to={`/admin/manageService/${category?.split(" ")?.join("_")}`}>
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
