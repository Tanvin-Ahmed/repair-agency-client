import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ServiceCategory.css';
import { Link } from 'react-router-dom';


const ServiceItem = ({ category }) => {

    return (
        <div className="col">
            <div className="card h-100">
                <img src={`data:image/png;base64,${category.image.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{category.category}</h5>
                </div>
                <div className="card-footer">
                <Link style={{ textDecoration: 'none' }} to={`/services/${category.category}`}><button type="button" className="category-btn form-control">Explore our service  <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
