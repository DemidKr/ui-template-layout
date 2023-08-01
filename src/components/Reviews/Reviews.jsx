import React from 'react';
import {useSnapCarousel} from "react-snap-carousel";

import firstUser from "../../img/user_1.png"
import secondUser from "../../img/user_2.png"
import thirdUser from "../../img/user_3.png"

import "./review.css"
import ReviewCard from "../ReviewCard/ReviewCard";

const reviews = [
    {
        name: 'Viezh Robert',
        address: 'Warsaw, Poland',
        img: firstUser,
        text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
        stars: 4.5
    },
    {
        name: 'Yessica Christy',
        address: 'Shanxi, China',
        img: secondUser,
        text: '“I like it because I like to travel far and still can connect with high speed.”.',
        stars: 4.5
    },
    {
        name: 'Kim Young Jou',
        address: 'Seoul, South Korea',
        img: thirdUser,
        text: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
        stars: 4.5
    },
    {
        name: 'Viezh Robert',
        address: 'Warsaw, Poland',
        img: firstUser,
        text: '4',
        stars: 4.5
    },
    {
        name: 'Yessica Christy',
        address: 'Shanxi, China',
        img: secondUser,
        text: '5',
        stars: 4.5
    },
    {
        name: 'Kim Young Jou',
        address: 'Seoul, South Korea',
        img: thirdUser,
        text: '6',
        stars: 4.5
    },
    {
        name: 'Viezh Robert',
        address: 'Warsaw, Poland',
        img: firstUser,
        text: '7',
        stars: 4.5
    },
    {
        name: 'Yessica Christy',
        address: 'Shanxi, China',
        img: secondUser,
        text: '8',
        stars: 4.5
    },
    {
        name: 'Kim Young Jou',
        address: 'Seoul, South Korea',
        img: thirdUser,
        text: '9',
        stars: 4.5
    },
    {
        name: 'Viezh Robert',
        address: 'Warsaw, Poland',
        img: firstUser,
        text: '10',
        stars: 4.5
    },
    {
        name: 'Yessica Christy',
        address: 'Shanxi, China',
        img: secondUser,
        text: '11',
        stars: 4.5
    },
    {
        name: 'Kim Young Jou',
        address: 'Seoul, South Korea',
        img: thirdUser,
        text: '12',
        stars: 4.5
    },
]

const Reviews = () => {
    const {
        scrollRef,
        pages,
        activePageIndex,
        prev,
        next,
        goTo,
        snapPointIndexes
    } = useSnapCarousel();

    return (
        <div className="review__container">
            <div className="review__text">
                <div className="review__title">
                    Trusted by Thousands of Happy Customer
                </div>
                <div className="review__desc">
                    These are the stories of our customers
                    who have joined us with great pleasure
                    when using this crazy feature.
                </div>
            </div>
            <div className="review__cards">
                <ul ref={scrollRef} >
                    {reviews.map((item, i) =>
                        <ReviewCard
                            address={item.address}
                            name={item.name}
                            img={item.img}
                            text={item.text}
                            stars={item.stars}
                            snap={snapPointIndexes.has(i)}
                            index={i}
                        />
                    )}
                </ul>
            </div>
            <div className="review__pagination">
                <div className="review__pages">
                    <div></div>
                    <div></div>
                </div>
                <button className="review__left" onClick={() => prev()}>Left</button>
                <button className="review__right" onClick={() => next()}>right</button>
            </div>
        </div>
    );
};

export default Reviews;