import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = ({ order, quantity, removeOrderHandler }) => {
  const [status, setStatus] = useState(order.status);

  const updateStatus = (id) => {
    fetch(`https://intense-plateau-36885.herokuapp.com/orders/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setStatus('shipped');
        }
      });
  };
  return (
    <div className='row  d-flex justify-content-center mt-5'>
      <div className='col-12 col-md-10 col-lg-9 '>
        <div className='add-product box-shadow bg-white p-4 '>
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <h5 className='mb-3 '>Order: {quantity + 1}</h5>

            <p className='text-dark'>{status}</p>
            <div className=''>
              <button
                className='border-0 bg-transparent ms-3'
                onClick={() => removeOrderHandler(order._id)}
              >
                {' '}
                <i className='fas fa-trash text-danger fs-4'></i>
              </button>
              <button
                className='border-0 bg-transparent ms-3'
                onClick={() => updateStatus(order._id)}
              >
                <i className='fas fa-check-square fs-4 text-success'></i>
              </button>
            </div>
          </div>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order?.order?.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>${order.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
