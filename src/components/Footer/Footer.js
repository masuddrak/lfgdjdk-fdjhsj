import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer pb-4 pt-3'>
            <div className="new-collection">
                <h5>New Collection</h5>
                <a href="">Sonia</a>
                <br />
                <a href="">Laky Liza</a>
                <br />
                <a href="">Tibason Dts</a>
            </div>
            <div className="new-collection">
                <h5>Best Collection</h5>
                <a href="">Susmita Lita</a>
            </div>
            <div className="new-collection">
                <h5>Contact Now</h5>
                <p>Phone: 01970533605</p>
                <p>Email: tistads@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;