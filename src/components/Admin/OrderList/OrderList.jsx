import React, { useContext, useEffect, useState } from 'react';
import './OrderList.css';
import { appContext } from '../../../App';
import { Spinner } from 'react-bootstrap';

const OrderList = () => {
    const { loadingSpinner, setLoadingSpinner } = useContext(appContext);
    const [fullOrderList, setFullOrderList] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    const getFullOrderList = () => {
        setLoadingSpinner(true);
        fetch('https://serene-caverns-03356.herokuapp.com/getFullOrderList')
            .then(res => res.json())
            .then(data => {
                setFullOrderList(data);
                setLoadingSpinner(false);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getFullOrderList();
    }, [])


    const handleUpdateStatus = (value, id) => {
        console.log(value, id);
        fetch(`https://serene-caverns-03356.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({value})
        })
        .then(res => res.json())
        .then(data => {getFullOrderList()})
        .catch(err => console.log(err));
    }


    return (
        <div className="order-list">
            <div className="container">
                <h2 className="header-color">Order List</h2>
                {loadingSpinner ? <div className="loadingSpinner">
                    <Spinner animation="border" variant="primary" />
                </div>
                    : <table className="table table-bg table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Service</th>
                                <th scope="col">Fee</th>
                                <th scope="col">Date</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fullOrderList.map((order, index) => (
                                    <tr key={order._id}>
                                        <th scope="row">{index + 1}</th>
                                        <th scope="col">{order?.userName}</th>
                                        <th scope="col">{order?.serviceName}</th>
                                        <th scope="col">{order?.fee}$</th>
                                        <th scope="col">{order?.date}</th>
                                        <th scope="col">
                                            <select onChange={(e) => handleUpdateStatus(e.target.value, order._id)} className={`form-control ${(order?.status === 'Pending' && 'pendingBg') || (order?.status === 'On going' && 'ongoingBg') || (order?.status === 'Done' && 'doneBg')}`}>
                                                <option className={`${(order?.status === 'Pending' && 'pendingText pendingBg') || (order?.status === 'On going' && 'ongoingText ongoingBg') || (order?.status === 'Done' && 'doneText doneBg')}`} value={order?.status}>{order?.status}</option>
                                                <option className={`${(order?.status === 'Pending' && 'ongoingText ongoingBg') || (order?.status === 'On going' && 'doneText doneBg') || (order?.status === 'Done' && 'pendingText pendingBg')}`} value={`${(order?.status === 'Pending' && 'On going') || (order?.status === 'On going' && 'Done') || (order?.status === 'Done' && 'Pending')}`}>{`${(order?.status === 'Pending' && 'On going') || (order?.status === 'On going' && 'Done') || (order?.status === 'Done' && 'Pending')}`}</option>
                                                <option className={`${(order?.status === 'Pending' && 'doneText doneBg') || (order?.status === 'On going' && 'pendingText pendingBg') || (order?.status === 'Done' && 'ongoingText ongoingBg')}`} value={`${(order?.status === 'Pending' && 'Done') || (order?.status === 'On going' && 'Pending') || (order?.status === 'Done' && 'On going')}`}>{`${(order?.status === 'Pending' && 'Done') || (order?.status === 'On going' && 'Pending') || (order?.status === 'Done' && 'On going')}`}</option>
                                            </select>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>}
            </div>
        </div>
    );
};

export default OrderList;