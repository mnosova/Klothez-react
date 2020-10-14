import React from 'react';
import {Route} from "react-router-dom";
import './style.scss';
import Header from '../modules/Header/'
import Footer from '../modules/Footer/'
import DeliveryPage from '../pages/Delivery/DeliveryPage'
import AboutPage from "../pages/About/AboutPage";

function App() {
    return (
        <>
        <Header/>
        <Route exact path='/delivery' component={DeliveryPage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Footer/>
        </>
    );
}

export default App;
