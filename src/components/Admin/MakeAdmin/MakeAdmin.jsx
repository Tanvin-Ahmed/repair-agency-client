import React, { useState } from 'react';
import './MakeAmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MakeAdmin = () => {

    const [newAdmin, setNewAdmin] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = /\S+@\S+\.\S+/.test(e.target.value);

        if (isValid) {
            fetch('https://serene-caverns-03356.herokuapp.com/setAdmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newAdmin })
            })
                .then(res => res.json())
                .then(data => alert('Add new Admin successfully'))
                .catch(err => alert('Admin was not created'));

            setNewAdmin('');
        } else {
            alert('Please Inter valid email and try again');
        }
    }

    return (
        <div className="make-admin">
            <div className="container rounded admin-form">
                <h2 className="header-color">Add New Admin</h2>
                <form onSubmit={handleSubmit}>
                    <input value={newAdmin} name="email" onChange={e => setNewAdmin(e.target.value)} className="form-control mb-3" type="email" placeholder="Email" style={{ color: '#012B62' }} />
                    <button onClick={handleSubmit} className="admin-btn" type="submit"><FontAwesomeIcon icon={faPlus} /> Add</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;