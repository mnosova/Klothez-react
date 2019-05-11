import React from 'react';
import './style.scss';

let data = [
    {'class': 'icon--master'},
    {'class': 'icon--visa'},
    {'class': 'icon--mir'}
];


const Payment = () => (

    <>
    <ul className="footer__social-list">
        {data.map((item, i) =>
            <li key={i} className={item.class}></li>
        )}
    </ul>

    </>


);

export default Payment;