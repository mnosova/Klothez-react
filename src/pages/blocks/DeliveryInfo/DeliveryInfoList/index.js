import React from 'react';
import './style.scss';
let data = [
    {'text' : 'Примерка перед покупкой', 'class':'icon--icon-1'},
    {'text' : 'Выбор даты и времени доставки', 'class':'icon--icon-2'},
    {'text' : 'Оплата наличными или картой при получении', 'class':'icon--icon-3'},
    {'text' : 'Возможность бесплатной доставки', 'class':'icon--icon-4'}
];


let liClass = 'delivery-info__list-item';
let pClass = 'delivery-info__text';

const DeliveryInfoList = () => (

    <ul className="delivery-info__list row no-column row-sm-center">
        {data.map((item,i) =>
            <li key={i} className={liClass +' '+ item.class}><p  className={pClass}><b>{item.text}</b></p></li>
        )}
    </ul>

);

export default DeliveryInfoList;