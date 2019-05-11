import React from 'react';

import H1Title from '../../../components/H1Title';
import DeliveryInfoList from './DeliveryInfoList';

function DeliveryInfo() {
    return (
        <section className="section__delivery-info center-text">
            <div className="container">
                <H1Title title="Доставка Klothez"/>
                <p className="text text--large">Узнайте о преимуществах каждого способа доставки и выберите самый удобный</p>
                <DeliveryInfoList/>
            </div>
        </section>

    );
}

export default DeliveryInfo;
