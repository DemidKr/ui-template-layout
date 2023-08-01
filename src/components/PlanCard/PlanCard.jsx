import React from 'react';

import './plan-card.css'
import Check from "../Check/Check";

const PlanCard = ({title, img, features, price}) => {
    return (
        <div className="plan-card__container">
            <div className="plan-card__img">
                <img src={img} alt="vplan-img"/>
            </div>
            <div className="plan-card__title">
                {title} Plan
            </div>
            <ul className="plan-card__features">
                {features.map(feature => <li><Check/><span>{feature}</span></li>)}
            </ul>
            {price > 0
                ? <div className="plan-card__price">${price} <span>/ mo</span></div>
                : <div className="plan-card__price">Free</div>
            }
            <button>
                Select
            </button>
        </div>
    );
};

export default PlanCard;