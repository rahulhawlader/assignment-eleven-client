import React from 'react';
import googleLogo from "../../../images/download.png"
import facebookLogo from "../../../images/facebook.png"
import githubLogo from "../../../images/github.png"

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>


            </div>
            <button className='btn btn-info my-2 mx-auto d-block w-50'>
                <img src={googleLogo} alt="" />
                <span className='px-2'>Google sign In</span>

            </button>
            <button className='btn btn-info my-2 mx-auto d-block w-50'>
                <img style={{ width: "30px" }} src={facebookLogo} alt="" />
                <span className='px-2'>Facebook sign In</span>

            </button>
            <button className='btn btn-primary text-white my-2 mx-auto d-block w-50'>
                <img src={githubLogo} alt="" />
                <span className='px-2 '>Github sign In</span>

            </button>

        </div>
    );
};

export default SocialLogin;