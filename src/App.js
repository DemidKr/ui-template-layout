import React from 'react';
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Info from "./components/Info/Info";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Promo/>
            <Info/>
        </div>
    );
};

export default App;