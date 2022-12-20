import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCog, faChartLine, faClipboard } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    return (
        <section className="experience">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                        <div className="part">
                            <img className="w-100" src="https://mobirise.com/extensions/repairamp/agency/assets/images/06.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                        <div className="part">
                            <div className="header">
                                <h5 style={{ color: 'orangered' }}>WHAT WE DO</h5>
                                <h1 className="text-light">Great Experience <br /> to Repair Everything</h1>
                            </div>
                            <article className="text-light">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis veniam in mollitia alias et error dolores iure aut, nisi eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla, dolor? Explicabo illo in incidunt quae animi, hic praesentium totam perferendis?
                            </article>

                            <div className="statistic">
                                <div className="row text-light">
                                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                                        <div className="part d-flex justify-content-around align-items-center flex-wrap">
                                            <div className="icon">
                                                <FontAwesomeIcon className="i" icon={faUserFriends} />
                                            </div>
                                            <div className="text">
                                                <h4>478</h4>
                                                <h6>Happy Customer</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
                                        <div className="part d-flex justify-content-around align-items-center flex-wrap">
                                            <div className="icon">
                                                <FontAwesomeIcon className="i" icon={faCog} />
                                            </div>
                                            <div className="text">
                                                <h4>1200</h4>
                                                <h6>Work Employed</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                        <div className="part d-flex justify-content-around align-items-center flex-wrap">
                                            <div className="icon">
                                                <FontAwesomeIcon className="i" icon={faChartLine} />
                                            </div>
                                            <div className="text">
                                                <h4>15</h4>
                                                <h6>Years Experience</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                                        <div className="part d-flex justify-content-around align-items-center flex-wrap">
                                            <div className="icon">
                                                <FontAwesomeIcon className="i" icon={faClipboard} />
                                            </div>
                                            <div className="text">
                                                <h4>544</h4>
                                                <h6>Projects Finished</h6>
                                            </div>
                                        </div>
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

export default Experience;