// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import useDress from "../../Hooks/useDress";


const DressDetails = () => {
    const [dress, setDress] = useDress();



    return (
        <div className='dress-style w-50'>
            <img src={dress.img} alt="" />
            <div>
                <h2>{dress.dressname}</h2>
                <p>Supplier: {dress.name}</p>
                <p>Price: ${dress.price}</p>
                <p>Quantity: {dress.quantity}</p>
                <p>Description: {dress.description}</p>

                <button className="btn btn-primary mx-2">Deliver</button>
                <button className="btn btn-primary">Add</button>
            </div>
        </div>
    );
};

export default DressDetails;