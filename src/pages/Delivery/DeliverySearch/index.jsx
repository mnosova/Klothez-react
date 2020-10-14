import React from 'react';
import './style.scss';
import Btn from './../../../components/Btn';


function DeliverySearch() {
    return (
        <section className="section__delivery-search center-text">
        <div className="container">
        <p className="text text--large"><b>Узнать подробнее о способах, скроках и ценах доставки в ваше городе</b></p>
    <form id="delivery-city">
        <div className="form-field row row-center no-column">
        <div className="delivery-search__block">
        <input className="city-select" type="text" placeholder="Санкт-Петербург"/>
        </div>
    <div className="delivery-search__block">
        <Btn title ="Узнать"/>
    </div>
    </div>
</form>
</div>
</section>

    );
}

export default DeliverySearch;
