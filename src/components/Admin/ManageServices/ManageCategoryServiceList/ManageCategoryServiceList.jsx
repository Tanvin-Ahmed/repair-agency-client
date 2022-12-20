import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { appContext } from "../../../../App";
import ServiceUpdateModal from "../ServiceUpdateModal/ServiceUpdateModal";
import "./ManageCategoryServiceList.css";

const ManageCategoryServiceList = () => {
  const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
  // need url
  const { pathname } = useLocation();
  const { category } = useParams();
  const [services, setService] = useState([]);
  const [chosenService, setChosenService] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  const getServiceItems = () => {
    setLoadingSpinner(true);
    fetch(`http://localhost:5000/serviceItem/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoadingSpinner(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getServiceItems();
  }, [isUpdate]);

  const handleDeleteServiceItem = (id) => {
    fetch(`http://localhost:5000/deleteServiceItem/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => getServiceItems())
      .catch((err) => alert("Something is wrong. Please try again"));
  };

  return (
    <div className="admin-manage-list">
      <Routes>
        <Route
          path={`${pathname}`}
          element={
            <>
              <h5 style={{ color: "orangered" }}>Service list</h5>
              {loadingSpinner ? (
                <div className="loadingSpinner">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <table
                  className="table text-light table-hover"
                  style={{ background: "#49678E" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Fee</th>
                      <th scope="col">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <tr key={service._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{service.serviceName}</td>
                        <td>{service.fee}</td>
                        <td>
                          <Link to={`${pathname}/${service._id}`}>
                            <button
                              onClick={() => {
                                setChosenService(service);
                              }}
                              type="button"
                              className="btn btn-outline-primary"
                            >
                              <FontAwesomeIcon
                                className="edit-icon"
                                icon={faEdit}
                              />
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDeleteServiceItem(service._id)}
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            <FontAwesomeIcon
                              className="delete-icon"
                              icon={faTrash}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          }
        />
        <Route
          path={`${pathname}/:id`}
          element={
            <ServiceUpdateModal
              key={chosenService._id}
              chosenService={chosenService}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default ManageCategoryServiceList;
