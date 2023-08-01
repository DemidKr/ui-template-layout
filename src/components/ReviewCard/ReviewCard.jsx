import React from 'react';
import Star from "../Star/Star";

import "./review-card.css"

const ReviewCard = ({name, address, img, text, stars, index, snap}) => {

    return (
        <li className={`review-card__container ${index === 0 ? 'first' : ''}`} style={{...snap}}>
            <div className="review-card__box">
                <div className="review-card__row">
                    <img src={img} alt="user"/>
                    <div className="review-card__info">
                        <div>{name}</div>
                        <span>{address}</span>
                    </div>
                    <div className="review-card__stars">
                        <span>{stars}</span>
                        <Star/>
                    </div>
                </div>
                <div className="review-card__text">
                    {text}
                </div>
            </div>
        </li>
    );
};

export default ReviewCard;