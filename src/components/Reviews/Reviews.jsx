import React from 'react';
import free from "../../img/free.png";
import standard from "../../img/standard.png";
import premium from "../../img/premium.png";
import {useSnapCarousel} from "react-snap-carousel";

const reviews = [
    {
        name: 'Viezh Robert',
        adsress: 'Warsaw, Poland',
        img: free,
        text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
        price: 4.5
    },
    {
        name: 'Yessica Christy',
        adsress: 'Shanxi, China',
        img: free,
        text: '“I like it because I like to travel far and still can connect with high speed.”.',
        price: 4.5
    },
    {
        name: 'Kim Young Jou',
        adsress: 'Seoul, South Korea',
        img: free,
        text: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
        price: 4.5
    },
    {
        name: 'Viezh Robert',
        adsress: 'Warsaw, Poland',
        img: free,
        text: '4',
        price: 4.5
    },
    {
        name: 'Yessica Christy',
        adsress: 'Shanxi, China',
        img: free,
        text: '5',
        price: 4.5
    },
    {
        name: 'Kim Young Jou',
        adsress: 'Seoul, South Korea',
        img: free,
        text: '6',
        price: 4.5
    },
    {
        name: 'Viezh Robert',
        adsress: 'Warsaw, Poland',
        img: free,
        text: '7',
        price: 4.5
    },
    {
        name: 'Yessica Christy',
        adsress: 'Shanxi, China',
        img: free,
        text: '8',
        price: 4.5
    },
    {
        name: 'Kim Young Jou',
        adsress: 'Seoul, South Korea',
        img: free,
        text: '9',
        price: 4.5
    },
    {
        name: 'Viezh Robert',
        adsress: 'Warsaw, Poland',
        img: free,
        text: '10',
        price: 4.5
    },
    {
        name: 'Yessica Christy',
        adsress: 'Shanxi, China',
        img: free,
        text: '11',
        price: 4.5
    },
    {
        name: 'Kim Young Jou',
        adsress: 'Seoul, South Korea',
        img: free,
        text: '12',
        price: 4.5
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
                <div className="review__title"></div>
                <div className="review__desc"></div>
            </div>
            <div className="review__cards">
                <ul ref={scrollRef} style={{
                    display: 'flex',
                    overflow: 'auto',
                    scrollSnapType: 'x mandatory'
                }}>
                    {reviews.map((item, i) =>
                        <li
                            style={{backgroundColor: 'aqua',
                                fontSize: '50px',
                                width: '250px',
                                height: '250px',
                                flexShrink: 0,
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexFlow: 'row',
                                ...snapPointIndexes.has(i)}}
                        >
                            {item.name}
                        </li>
                    )}
                </ul>
            </div>
            <div className="review__paggination">
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