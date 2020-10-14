import React from 'react';
import './delivery';
import DeliveryInfo from './DeliveryInfo';
import DeliverySearch from './DeliverySearch';
import DeliveryMethods from './DeliveryMethods';
import DeliveryFaq from './DeliveryFaq';
import DeliveryPartners from './DeliveryPartners';

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
