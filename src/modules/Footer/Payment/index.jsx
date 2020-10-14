import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';


const Payment = ({icons}) => (

    <>
    <ul className="footer__social-list">
        {icons.map((item, i) =>
            <li key={i} className={item.class}></li>
        )}
    </ul>

    </>


);

Payment.propTypes ={
    icons : PropTypes.array
};

export default Payment;