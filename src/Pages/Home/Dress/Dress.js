import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dress.css'

const Dress = ({ dress }) => {
    const { _id, name, img, price, description, dressname, quantity } = dress;
    const navigate = useNavigate()
    const navigateTODressDetails = id => {
        navigate(`/dress/${id}`)
    }
    return (

        <div className='dress-style'>

            <img src={img} alt="" />

            <div>
                <h2>{dressname}</h2>
                <p>Supplier: {name}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Description: {description}</p>

                <button onClick={() => navigateTODressDetails(_id)} className='btn btn-primary ms-auto button-style'>Update</button>
            </div>
        </div>


    );
};

export default Dress;