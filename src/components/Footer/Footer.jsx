import React from 'react';

import logo from "../../img/logo.png"
import facebook from "../../img/Facebook.png"
import twitter from "../../img/Twitter.png"
import instagram from "../../img/Instagram.png"

import "./footer.css"

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__subscribe">
                <div className="footer__info">
                    <div>Subscribe Now for Get Special Features!</div>
                    <span>Let's subscribe with us and find the fun.</span>
                </div>
                <button>
                    Subscribe Now
                    <div></div>
                </button>
            </div>
            <div className="footer__row">
                <div className="footer__main">
                    <div className="footer__title">
                        <img src={logo} alt="logo"/>
                        Lasles<span>VPN</span>
                    </div>
                    <div className="footer__desc">
                        <span>LaslesVPN </span>
                        is a private virtual network that has unique features and has high security.
                    </div>
                    <div className="footer__social">
                        <img src={facebook} alt="facebook"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={instagram} alt="instagram"/>
                    </div>
                    <div className="footer__license">
                        ©2020Lasles<span>VPN</span>
                    </div>
                </div>
                <div className="footer__columns">
                    <div className="footer__column">
                        <div>Product</div>
                        <ul>
                            <li>Download</li>
                            <li>Pricing</li>
                            <li>Locations</li>
                            <li>Server</li>
                            <li>Countries</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <div>Engage</div>
                        <ul>
                            <li>LaslesVPN ?</li>
                            <li>FAQ</li>
                            <li>Tutorials</li>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <div>Earn Money</div>
                        <ul>
                            <li>Affiliate</li>
                            <li>Become Partner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;