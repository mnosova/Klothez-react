import React from 'react';

import H1Title from '../../../components/H1Title';
import DeliveryInfoList from './DeliveryInfoList';


let questions = [
    {'text' : 'Примерка перед покупкой', 'class':'icon--icon-1'},
    {'text' : 'Выбор даты и времени доставки', 'class':'icon--icon-2'},
    {'text' : 'Оплата наличными или картой при получении', 'class':'icon--icon-3'},
    {'text' : 'Возможность бесплатной доставки', 'class':'icon--icon-4'}
];
function DeliveryInfo() {
    return (
        <section className="section__delivery-info center-text">
            <div className="container">
                <H1Title title="Доставка Klothez"/>
                <p className="text text--large">Узнайте о преимуществах каждого способа доставки и выберите самый удобный</p>
                <DeliveryInfoList questions={questions}/>
            </div>
        </section>

    );
}

export default DeliveryInfo;
