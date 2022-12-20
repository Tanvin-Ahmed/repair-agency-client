import React from 'react';
import './Advertisement.css'
const Advertisement = () => {
    return (
        <section className="advertisement">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="part rounded">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/riJFjBLBx7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="part text-center text-light">
                        <h1>Trusted By More <br/> Than <span style={{ color: 'orangered' }}>650,000</span> Happy People</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Temporibus atque expedita nam iure et, reiciendis error nemo vel libero repellendus in. Officiis et eveniet possimus sapiente quam nobis obcaecati hic?</p>
                        <button class="advertise-btn"type="button">View Our Projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advertisement;