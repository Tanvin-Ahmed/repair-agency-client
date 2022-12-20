import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="part">
                            <h2>Get In Touch</h2>
                            <div className=" sub-part">
                            <FontAwesomeIcon className="i" icon={faMapMarkerAlt} />
                                <p>Mirpur, Dhaka, BD</p>
                            </div>
                            <div className="email sub-part">
                            <FontAwesomeIcon className="i" icon={faEnvelope} />
                                <p>support@gmail.com</p>
                            </div>
                            <div className="phone sub-part">
                            <FontAwesomeIcon className="i" icon={faPhoneAlt} />
                                <div className="sub">
                                    <p>Phone: +88018xxxxxxxx <br />Support: +88019xxxxxxxx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="part">
                            <h2>Useful Links</h2>
                            <div className="link">
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                            </div>
                            <div className="link">
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                                <br />
                                <a href=""><FontAwesomeIcon className="i" icon={faCheck} /> Home</a>
                            </div>
                            <div className="link"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="part">
                            <div className="img-descript">
                                <img src="https://mobirise.com/extensions/repairamp/agency/assets/images/06.jpg" alt="" />
                                <p>Everything Repair Master className <br /> December 12, 2020</p>
                            </div>
                            <div className="img-descript">
                                <img src="https://mobirise.com/extensions/repairamp/agency/assets/images/04.jpg" alt="" />
                                <p>Best Repair Guides of This Year <br /> December 16, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="part">
                            <h2>Get Free Estimate</h2>
                            <h1>123-456-78910</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maxime.</p>
                            <button type="button">Contact Us!</button>
                        </div>
                    </div>
                </div>
                <h5 className="text-center text-light my-5">&copy; by Tanvin Ahmed {new Date().getFullYear()} - All Rights Reserved</h5>
            </div>
        </footer>
    );
};

export default Footer;