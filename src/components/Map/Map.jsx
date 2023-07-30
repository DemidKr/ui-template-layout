import React from 'react';

import map from "../../img/map.png"
import './map.css'

const Map = () => {
    return (
        <div className="map__container">
            <div className="map__text">
                <div className="map__title">Huge Global Network of Fast VPN</div>
                <div className="map__desc">See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.</div>
            </div>
            <div className="map__img">
                <img src={map} alt="map"/>
            </div>
        </div>
    );
};

export default Map;