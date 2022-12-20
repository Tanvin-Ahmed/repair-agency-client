import React, { useContext, useState } from 'react';
import { appContext } from '../../../App';
import ContactForm from '../ContactForm/ContactForm';
import './Banner.css';

const Banner = () => {
    const {loggedInUser} = useContext(appContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h5>WELCOME TO REPAIR AGENCY</h5>
                        <h1>We give Professional <br /> <span style={{color:'orangered'}}>Repair</span> Service</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur quibusdam exercitationem esse voluptatum quos!</p>
                        <button onClick={openModal} className="banner-btn" type="button">Contact Us!</button>
                        {
                            loggedInUser?.email ? <ContactForm modalIsOpen={modalIsOpen} closeModal={closeModal} /> : <p className="text-warning">Login is require to contact</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;