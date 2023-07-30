import React from 'react';

import './plan-card.css'
import Check from "../Check/Check";

const PlanCard = ({title, img, features, price}) => {
    return (
        <div className="card__container">
            <div className="card__img">
                <img src={img} alt="plan-img"/>
            </div>
            <div className="card__title">
                {title} Plan
            </div>
            <ul className="card__features">
                {features.map(feature => <li><Check/><span>{feature}</span></li>)}
            </ul>
            {price > 0
                ? <div className="card__price">${price} <span>/ mo</span></div>
                : <div className="card__price">Free</div>
            }
            <button>
                Select
            </button>
        </div>
    );
};

export default PlanCard;