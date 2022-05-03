import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate(from, { replace: true })
    }

    if (error) {
        errorElement =
            <div>

                <p className='text-danger'>Error: {error?.message}</p>
            </div>

    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    const navigateRagister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }


    return (
        <div className='container w-50 mx-auto'>
            <h4 className='text-primary text-center'>Please Login</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary mx-auto w-50 d-block" type="submit">
                    Login
                </Button>

            </Form>
            {errorElement}
            <p className='text-center'>New To Fasion House? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRagister}>Please Register</Link></p>
            <p className='text-center'>Forgate Password? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;