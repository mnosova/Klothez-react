import React from 'react';
import './style.scss';
import H2Title from './../../../components/H2Title';
import PartnersImage from './PartnersImage'
function DeliveryPartners() {
    return (
        <section className="section__delivery-partners">
            <H2Title className="center-text" title="Наши партнеры"/>
            <div className="content-container row row-around no-column">
                <PartnersImage/>
            </div>
        </section>

    );
}

export default DeliveryPartners;
