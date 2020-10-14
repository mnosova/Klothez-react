import React from 'react';
import './style.scss';
import DeliveryInfo from './blocks/DeliveryInfo';
import DeliverySearch from './blocks/DeliverySearch';
import DeliveryMethods from './blocks/DeliveryMethods';
import DeliveryFaq from './blocks/DeliveryFaq';
import DeliveryPartners from './blocks/DeliveryPartners';

function DeliveryPage() {
    return (
        <div className="page page__delivery">
            <DeliveryInfo/>
            <DeliverySearch/>
            <DeliveryMethods/>
            <DeliveryFaq/>
            <DeliveryPartners/>
        </div>

    );
}

export default DeliveryPage;
