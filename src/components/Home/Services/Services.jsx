import React, { useContext, useEffect, useState } from 'react';
import ServiceCategory from '../ServiceCategory/ServiceCategory';
import './Services.css';
import { appContext } from '../../../App';
import { Spinner } from 'react-bootstrap';


const Services = () => {
    const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setLoadingSpinner(true);
        fetch('https://serene-caverns-03356.herokuapp.com/getAllCategory')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoadingSpinner(false);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <section className="services">
            <div className="container">
                <div className="header text-center mb-5">
                    <h1 className="header-color">Explore Our Services</h1>
                    <h5 style={{ color: 'orangered' }}>CATEGORY BASED</h5>
                </div>
                {
                    loadingSpinner ? <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                    </div> : <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            categories.map(category => <ServiceCategory key={category._id} category={category} />)
                        }
                    </div>
                }

            </div>
        </section>
    );
};

export default Services;