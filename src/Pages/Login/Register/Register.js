import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();


    const navigateLogin = () => {

        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;

        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }


    }

    return (
        <div className='register-form container w-50 mx-auto'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="text" id="" placeholder='Your Name' required />

                <input type="email" name="email" id="" placeholder='Your Email' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? "text-primary" : "text-danger"} htmlFor="terms">Accept Fasion terms and condition</label>

                <input
                    disabled={!agree}
                    className='bg-primary text-white mt-2'
                    type="submit"
                    value="Register" />

            </form>
            <p className='text-center '>New To Fasion House? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;