import {
  faArrowLeft,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { appContext } from "../../../../context/UserContext";

import ServiceUpdateModal from "../ServiceUpdateModal/ServiceUpdateModal";
import "./ManageCategoryServiceList.css";

const ManageCategoryServiceList = () => {
  const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
  const { category } = useParams();
  const [services, setService] = useState([]);
  const [chosenService, setChosenService] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setChosenService({});
  }, []);

  const getServiceItems = () => {
    setLoadingSpinner(true);
    const cat = category.split("_").join(" ");
    fetch(`http://localhost:5000/serviceItem/${cat}`)
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
      {chosenService?._id ? (
        <>
          <Button className="btn-primary" onClick={() => setChosenService({})}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <ServiceUpdateModal
            key={chosenService._id}
            chosenService={chosenService}
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
          />
        </>
      ) : (
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
                      <button
                        onClick={() => {
                          setChosenService(service);
                        }}
                        type="button"
                        className="btn btn-outline-primary"
                      >
                        <FontAwesomeIcon className="edit-icon" icon={faEdit} />
                      </button>
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
      )}
    </div>
  );
};

export default ManageCategoryServiceList;
