import React from 'react';

import logoImg from '../../img/Logo.png'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo"/>
                        <div>Lasles<span>VPN</span></div>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">Help</a></li>
                        </ul>
                    </nav>
                    <div className="header__login">
                        <button className="sign__in">Sign In</button>
                        <button className="sign__up">Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;