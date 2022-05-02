import React from 'react';
import './Dress.css'

const Dress = ({ dress }) => {
    const { name, img, price, description, dressname, quantity } = dress
    return (
        <div className='dress'>
            <div className='dress-style'>
                <img src={img} alt="" />
                <div>
                    <h2>{dressname}</h2>
                    <p>Supplier: {name}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Description: {description}</p>

                    <button className='btn btn-primary ms-auto'>Update</button>
                </div>
            </div>

        </div>
    );
};

export default Dress;