import React from 'react';
import CheckCircle from "../CheckCircle/CheckCircle";

import illustration from "../../img/Illustration_2.png"
import "./features.css"

const Features = () => {
    return (
        <div className="features__container">
            <div className="features__row">
                <div className="features__img">
                    <img src={illustration} alt="illustration"/>
                </div>
                <div className="features__text">
                    <div className="features__title">
                        We Provide Many Features You Can Use
                    </div>
                    <div className="features__desc">
                        You can explore the features that we provide with fun and have their own functions each feature.
                    </div>
                    <ul>
                        <li>
                            <CheckCircle/>
                            <span> Powerful online protection.</span>
                        </li>
                        <li>
                            <CheckCircle/>
                            <span>Internet without borders.</span>
                        </li>
                        <li>
                            <CheckCircle/>
                            <span>Supercharged VPN.</span>
                        </li>
                        <li>
                            <CheckCircle/>
                            <span>No specific time limits.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Features;