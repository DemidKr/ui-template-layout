import React from 'react';

import "./promo.css"
import illustration from "../../img/Illustration_1.png"

const Promo = () => {
    return (
        <div className="promo__container">
            <div className="promo__row">
                <div className="promo__text">
                    <div className="promo__title">
                        Want anything to be easy with <span>LaslesVPN.</span>
                    </div>
                    <div className="promo__desc">
                        Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.
                    </div>
                    <button className="promo__btn">Get Started</button>
                </div>
                <div className="promo__img">
                    <img src={illustration} alt="illustration"/>
                </div>
            </div>
        </div>
    );
};

export default Promo;