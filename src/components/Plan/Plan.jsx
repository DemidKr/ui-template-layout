import React from 'react';

import free from '../../img/free.png'
import standard from '../../img/standard.png'
import premium from '../../img/premium.png'
import PlanCard from "../PlanCard/PlanCard";

import './plan.css'


const plans = [
    {
        title: 'Free',
        img: free,
        features: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices'
        ],
        price: 0
    },
    {
        title: 'Standard',
        img: standard,
        features: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'Yes Traffic Logs',
            'Works on All Devices',
            'Connect Anyware'
        ],
        price: 9
    },
    {
        title: 'Premium',
        img: premium,
        features: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'Yes Traffic Logs',
            'Works on All Devices',
            'Connect Anyware',
            'Get New Features'
        ],
        price: 12
    },
]

const Plan = () => {
    return (
        <div className="plan__container">
            <div className="plan__text">
                <div className="plan__title">Choose Your Plan</div>
                <div className="plan__desc">Let's choose the package that is best for you and explore it happily and cheerfully.</div>
            </div>
            <div className="plan__card">
                {plans.map((plan) =>
                    <PlanCard
                        title={plan.title}
                        img={plan.img}
                        features={plan.features}
                        price={plan.price}
                    />
                )}
            </div>
        </div>
    );
};

export default Plan;