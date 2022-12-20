import React from 'react';
import './Location.css';

const Location = () => {
    return (
        <section className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.670110576853!2d90.4125635142978!3d23.794758892998683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71a82116f79%3A0x6b9c592a297523c6!2sRepair%20Zone!5e0!3m2!1sen!2sbd!4v1618497333354!5m2!1sen!2sbd" width="600" height="450" style={{border:0, width:'100%'}} allowfullscreen="" loading="lazy"></iframe>
        </section>
    );
};

export default Location;