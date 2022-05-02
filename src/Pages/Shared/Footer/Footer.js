import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 footer-style'>
            <p>Copyright @{year}</p>
        </footer>
    );
};

export default Footer;