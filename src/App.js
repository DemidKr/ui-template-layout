import React from 'react';
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Info from "./components/Info/Info";
import Features from "./components/Features/Features";
import Plan from "./components/Plan/Plan";
import Map from "./components/Map/Map";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Promo/>
            <Info/>
            <Features/>
            <Plan/>
            <Map/>
        </div>
    );
};

export default App;