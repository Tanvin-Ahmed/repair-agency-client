import React from 'react';
import './TestimonialsBody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../img/avater/avater.png';

const TestimonialsBody = ({ review }) => {
    return (
        <div className="col client-opinion" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <div class="card h-100">
                <div className="d-flex flex-wrap">
                    <img style={{ width: '5rem' }} src={review.image || avatar} class="card-img-top" alt="..." />
                    <div className="header">
                        <h5 class="card-title ml-3">{review.name}</h5>
                        <p className="text-muted ml-3">-- Our clients</p>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">{review.review}</p>
                </div>
                <div class="card-footer">
                    <h5 style={{ color: 'orangered' }}><FontAwesomeIcon icon={faStar} /> {review.rate}</h5>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsBody;