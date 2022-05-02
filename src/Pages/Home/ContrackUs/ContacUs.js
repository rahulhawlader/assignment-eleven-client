import React from 'react';
import contact from '../../../images/extrasection/letGo.jpg'
import './ContacUs.css'

const ContacUs = () => {
    return (
        <div className='mt-4 '>
            <h1 className='text-center text-info'> CONTACT US</h1>
            <div className='background'>
                <img src={contact} alt="" />
                <div className=''>
                    <h2 className='text-secondary'>Get in Touch</h2>
                    <form className=''>
                        <input placeholder='Name' className='mb-2 bg-dark text-light w-50' type="text" name="" id="" />

                        <br />
                        <input placeholder='Email' className='mb-2 bg-dark text-light w-50' type="email" name="" id="" />
                        <br />

                        <input placeholder='Phone' className='mb-2 bg-dark text-light w-50 ' type="number" name="" id="" />
                        <br />
                        <input className='btn bg-success ms-auto text-center w-12 w-50' type="submit" value="Contact Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContacUs;