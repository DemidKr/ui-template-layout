import React from 'react';

import "./info.css"
import user from "../../img/user.png"
import location from "../../img/location.png"
import server from "../../img/server.png"


const Info = () => {
    return (
        <div className="info__container">
            <div className="info__row">
                <div className="info__block">
                    <img src={user} alt="user"/>
                    <div className="info__text">
                        <div>90+</div>
                        <div><span>Users</span></div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="129" viewBox="0 0 3 129" fill="none">
                    <path d="M1.5 1.76257V127.336" stroke="#EEEFF2" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div className="info__block">
                    <img src={location} alt="location"/>
                    <div className="info__text">
                        <div>30+</div>
                        <div><span>Locations</span></div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="129" viewBox="0 0 3 129" fill="none">
                    <path d="M1.5 1.76257V127.336" stroke="#EEEFF2" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div className="info__block">
                    <img src={server} alt="server"/>
                    <div className="info__text">
                        <div>50+</div>
                        <div><span>Servers</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;