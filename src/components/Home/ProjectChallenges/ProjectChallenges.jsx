import React from 'react';
import './ProjectChallenges.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ProjectChallenges = () => {
    return (
        <section className="project-challenges">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                        <div className="part">
                            <h1>Project Challenge</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consequatur laborum magni dicta expedita quae libero unde sunt. <br/> <br/> Dolorum consequuntur quam, exercitationem labore ex esse consequatur ab earum at placeat quos consectetur dicta rem voluptate repellendus magnam nulla expedita nesciunt modi excepturi soluta. Quas, exercitationem dicta suscipit pariatur saepe corporis?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="part">
                            <div className="img">
                                <img src="https://mobirise.com/extensions/repairamp/agency/assets/images/04.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectChallenges;