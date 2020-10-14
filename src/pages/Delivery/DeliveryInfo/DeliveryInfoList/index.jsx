import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';



let liClass = 'delivery-info__list-item';
let pClass = 'delivery-info__text';

const DeliveryInfoList = ({questions}) => (

    <ul className="delivery-info__list row no-column row-sm-center">
        {questions.map((item,i) =>
            <li key={i} className={liClass +' '+ item.class}><p  className={pClass}><b>{item.text}</b></p></li>
        )}
    </ul>

);
DeliveryInfoList.propTypes= {
    questions: PropTypes.array

};
export default DeliveryInfoList;