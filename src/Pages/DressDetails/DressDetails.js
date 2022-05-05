// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import { useParams } from "react-router-dom";
import useDress from "../../Hooks/useDress";


const DressDetails = () => {
    const { dressId } = useParams();
    // console.log(dressId);
    const [dress, setDress] = useDress();
    // console.log(dress);
    const quantity = parseInt(dress.quantity) || 0;
    console.log(quantity);

    const updateQuantity = (event) => {
        event.preventDefault();
        // console.log(event);

        const newQuantity = event.target.updateValue.value;
        ;
        console.log(newQuantity);
        if (newQuantity) {
            const addQuantity = parseInt(newQuantity) + quantity
            // console.log(addQuantity);
            const bd = { addQuantity }
            // const url = `http://localhost:5000/dress/${dressId}`;

            fetch(`http://localhost:5000/dress/${dressId}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bd)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('succes ', data);
                    event.target.reset();
                })
        }


    }

    const deliverQuantity = () => {
        // event.preventDefault();
        const addQuantity = quantity - 1;
        // const newDress = { ...dress, quantity: newQuantity }
        // setDress(newDress)
        const bd = { addQuantity }
        console.log(bd);
        fetch(`http://localhost:5000/dress/${dressId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, setDress(data));
            })
    }

    return (
        <div>

            <div className='dress-style w-50'>
                <img src={dress.img} alt="" />
                <div>
                    <h2>{dress.dressname}</h2>
                    <p>Supplier: {dress.name}</p>
                    <p>Price: ${dress.price}</p>
                    <p>Quantity: {dress.quantity}</p>
                    <p>Description: {dress.description}</p>


                    {/* <button className="btn btn-primary mx-2">Deliver</button> */}

                    {/* <button className="btn btn-primary">Update</button> */}
                </div>
                <form onSubmit={updateQuantity}>
                    <input type="number" name="updateValue" id="" />
                    <input className="btn btn-primary" type="submit" value="Update" />

                </form>
                <button onClick={() => deliverQuantity()} className="btn btn-primary mx-2">Deliver</button>


            </div>

        </div>
    );
};

export default DressDetails;