import React from 'react';

import sponsored from "../../img/sponsored.png"
import "./sponsored.css"

const Sponsored = () => {
    return (
        <div className="sponsored__container">
            <img src={sponsored} alt="sponsored"/>
        </div>
    );
};

export default Sponsored;