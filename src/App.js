import React from 'react';
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Info from "./components/Info/Info";
import Features from "./components/Features/Features";
import Plan from "./components/Plan/Plan";
import Map from "./components/Map/Map";
import Sponsored from "./components/Sponsored/Sponsored";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Promo/>
            <Info/>
            <Features/>
            <Plan/>
            <Map/>
            <Sponsored/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default App;