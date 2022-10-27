import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h1>#</h1>
            <div>

                <Link style={{ textDecoration: 'none' }} to='/home'>Home</Link><br />
                <Link style={{ textDecoration: 'none' }} to='/courses-container'>Courses</Link><br />
                <Link style={{ textDecoration: 'none' }} to='/blog'>Blog</Link>
                <br />
                <Link style={{ textDecoration: 'none' }} to='/faq'>FAQ</Link>
                <br /><br />
                <p>copyright @2022</p>
            </div>
            
        </div>
    );
};

export default Footer;