import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';



const FooterNav = ({data}) => (

    <>
    {data.map((item, i) =>
    <ul key ={i} className="footer__nav-list">
        {item.nav.map((item, i) =>
            <li key={i}>
                <a href={item.link}>{item.name}</a>
            </li>
        )}
    </ul>
    )}
    </>


);

FooterNav.propTypes = {
    data: PropTypes.array

};

export default FooterNav;