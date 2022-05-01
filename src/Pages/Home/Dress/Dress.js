import React from 'react';
import './Dress.css'

const Dress = ({ dress }) => {
    const { name, img, price, description, dressname, } = dress
    return (
        <div className='dress'>
            <div className='dress-style'>
                <img src={img} alt="" />
                <div>
                    <h2>{dressname}</h2>
                    <p>Price: ${price}</p>
                    <p>Description: {description}</p>
                    <p>Supplier: {name}</p>
                    <button>Update</button>
                </div>
            </div>

        </div>
    );
};

export default Dress;