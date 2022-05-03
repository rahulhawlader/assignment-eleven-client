import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';


const Register = () => {
    const navigate = useNavigate();


    const navigateLogin = () => {

        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="text" id="" placeholder='Your Name' required />

                <input type="email" name="email" id="" placeholder='Your Email' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input type="submit" value="Submit" />

            </form>
            <p className='text-center'>New To Fasion House? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;