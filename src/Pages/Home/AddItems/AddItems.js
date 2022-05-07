import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const AddItems = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        // const url =;
        fetch(`https://ancient-scrubland-73255.herokuapp.com/dress`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
            })



    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Our Order Form</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Dress Name ' type="text"{...register("dressname", { required: true, maxLength: 20 })} />

                <input className='mb-2' placeholder='suplaire Name' type="text"{...register("name")} />

                <input className='mb-2' value={user?.email} placeholder='email' {...register("email")} readOnly />

                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <textarea className='mb-2' placeholder='Description' type="text" {...register("description")} />
                <input className='mb-2' placeholder='Photo URL' {...register("img")} />
                <input className='btn-primary' type="submit" value="Add Items" />
            </form>

        </div>
    );
};

export default AddItems;