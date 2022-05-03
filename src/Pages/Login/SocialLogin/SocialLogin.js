import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from "../../../images/download.png"
import facebookLogo from "../../../images/facebook.png"
import githubLogo from "../../../images/github.png"

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement
    if (error || error1) {
        errorElement =
            <div>

                <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
            </div>

    }

    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>


            </div>
            {errorElement}
            <button

                onClick={() => signInWithGoogle()}
                className='btn btn-info my-2 mx-auto d-block w-50'>
                <img src={googleLogo} alt="" />
                <span className='px-2'>Google sign In</span>

            </button>
            <button className='btn btn-info my-2 mx-auto d-block w-50'>
                <img style={{ width: "30px" }} src={facebookLogo} alt="" />
                <span className='px-2'>Facebook sign In</span>

            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-primary text-white my-2 mx-auto d-block w-50'>
                <img src={githubLogo} alt="" />
                <span className='px-2 '>Github sign In</span>

            </button>

        </div>
    );
};
export default SocialLogin;