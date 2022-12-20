import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <div className="header text-center mb-5">
                    <h5 style={{ color: 'orangered' }}>WORKING WITH EXCELLENT</h5>
                    <h1 className="header-color">Our Great Team</h1>
                </div>
                <div className="team-list">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 my-3"  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                            <div className="card h-100" style={{ width: '100%' }}>
                                <div className="img">
                                    <img src="https://mobirise.com/extensions/repairamp/agency/assets/images/face1.jpg" className="card-img-top img-fluid" alt="..." />
                                    <div className="overlay">
                                        <div className="icons">
                                            <a href=""><FontAwesomeIcon className="i" icon={faFacebook} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faTwitter} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faInstagram} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faLinkedin} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Jenifer Gary</h4>
                                    <p className="card-text">Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 my-3"  data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <div className="card h-100" style={{ width: '100%' }}>
                                <div className="img">
                                    <img src="https://mobirise.com/extensions/repairamp/agency/assets/images/face2.jpg" className="card-img-top img-fluid" alt="..." />
                                    <div className="overlay">
                                        <div className="icons">
                                            <a href=""><FontAwesomeIcon className="i" icon={faFacebook} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faTwitter} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faInstagram} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faLinkedin} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Dwayn Royes</h4>
                                    <p className="card-text">Repair Master</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 my-3"  data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
                            <div className="card h-100" style={{ width: '100%' }}>
                                <div className="img">
                                    <img src="https://mobirise.com/extensions/repairamp/agency/assets/images/face3.jpg" className="card-img-top img-fluid" alt="..." />
                                    <div className="overlay">
                                        <div className="icons">
                                            <a href=""><FontAwesomeIcon className="i" icon={faFacebook} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faTwitter} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faInstagram} /></a>{' '}
                                            <a href=""><FontAwesomeIcon className="i" icon={faLinkedin} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Ann Brown</h4>
                                    <p className="card-text">Clients Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 my-3"  data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                            <div className="part">
                                <div className="card h-100" style={{ width: '100%' }}>
                                    <div className="img">
                                        <img src="https://mobirise.com/extensions/repairamp/agency/assets/images/face4.jpg" className="card-img-top img-fluid" alt="..." />
                                        <div className="overlay">
                                            <div className="icons">
                                                <a href=""><FontAwesomeIcon className="i" icon={faFacebook} /></a>{' '}
                                                <a href=""><FontAwesomeIcon className="i" icon={faTwitter} /></a>{' '}
                                                <a href=""><FontAwesomeIcon className="i" icon={faInstagram} /></a>{' '}
                                                <a href=""><FontAwesomeIcon className="i" icon={faLinkedin} /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Andrew Jonson</h4>
                                        <p className="card-text">Repair Master</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;