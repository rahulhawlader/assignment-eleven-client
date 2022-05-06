// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import { Link, useParams } from "react-router-dom";
import useDress from "../../Hooks/useDress";
import './DressDetails.css';


const DressDetails = () => {
    const { dressId } = useParams();
    // console.log(dressId);
    const [dress, setDress] = useDress();
    // console.log(dress);
    const quantity = parseInt(dress.quantity) || 0;
    // console.log(quantity);

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
        <div className="my-Stoke">

            <div className='dress-style '>
                <img src={dress.img} alt="" />
                <div>
                    <h2>{dress.dressname}</h2>
                    <p>Supplier: {dress.name}</p>
                    <p>Price: ${dress.price}</p>
                    <p>Quantity: {dress.quantity}</p>
                    <p>Description: {dress.description}</p>


                    <form onSubmit={updateQuantity}>
                        <input className="mb-2" type="number" name="updateValue" id="" />
                        <br />
                        <input className="btn btn-primary" type="submit" value="Update" />
                        <button onClick={() => deliverQuantity()}

                            className="btn   btn-danger mx-2">Deliver</button>

                    </form>

                </div>




            </div>
            <div className="dress-style  button-style">
                <h1 className="text-center align-center">MY STORE ROOM</h1>

                <div  >
                    <Link to="/manageInventore" >
                        <button className="btn btn-primary">Manage Inventori</button>

                    </Link>

                </div>

            </div>

        </div>
    );
};

export default DressDetails;