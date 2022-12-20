import React from 'react';
import './ServiceUpdateModal.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const ServiceUpdateModal = ({ chosenService, isUpdate, setIsUpdate }) => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        const item = {
            serviceName: data.serviceName,
            fee: data.fee,
            description: data.description,
        }
        fetch(`https://serene-caverns-03356.herokuapp.com/updateService/${chosenService._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                setIsUpdate(!isUpdate);
                alert('Update successfully');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container rounded admin-form" >
            <h5 className="mb-3" style={{ color: 'orangered' }}>UPDATE SERVICE</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control my-2" defaultValue={chosenService?.serviceName} {...register("serviceName")} />
                <input className="form-control my-2" defaultValue={chosenService?.fee} {...register("fee")} />
                <textarea className="form-control my-2" defaultValue={chosenService?.description} {...register("description")} cols="30" rows="10"></textarea>
                <input type="submit" className="admin-btn" />
            </form>
        </div>
    );
};

export default ServiceUpdateModal;