// import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDresses from '../../../Hooks/useDresses';
// import Dress from '../Dress/Dress';
// import useDress from '../../../Hooks/useDress';
import './MangeInventore.css'

const MangeInventore = () => {
    const [dresses, setDresses] = useDresses();

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://ancient-scrubland-73255.herokuapp.com/dress/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainig = dresses.filter(dress => dress._id !== id)
                    setDresses(remainig)

                })
        }



    }
    return (
        <div className='mx-auto'>



            <h1 className='text-center'>Inventore all dress Items</h1>
            <div className='all-dresss container mb-2'>

                {

                    dresses.map(dress => <div key={dress._id}>

                        <Card style={{ width: '18rem' }}  >
                            <Card.Img variant="top" src={dress.img} />
                            < Card.Body >
                                <Card.Title>Dress Title</Card.Title>
                                <Card.Text>
                                    {dress.description}
                                </Card.Text>
                            </Card.Body >
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Name:-{dress.dressname}</ListGroupItem>
                                <ListGroupItem>Suplaire: {dress.name}</ListGroupItem>
                                <ListGroupItem>Price: ${dress.price}</ListGroupItem>
                                <ListGroupItem>Quantity: {dress.quantity}</ListGroupItem>


                            </ListGroup>
                            <Card.Body>
                                <button onClick={() => handleDelete(dress._id)} className='btn btn-primary'>Delete</button>
                                {/* <button></button> */}
                            </Card.Body>
                        </Card >

                    </div >)

                }
                <div>
                    <Link to="/add">
                        <button className='btn btn-primary align-center'>Add Items</button>
                    </Link>
                </div>
            </div>


        </div >
    );
};

export default MangeInventore;