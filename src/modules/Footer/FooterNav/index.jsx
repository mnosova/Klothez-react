import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Link} from "react-router-dom";



const FooterNav = ({data}) => (

    <>
    {data.map((item, i) =>
    <ul key ={i} className="footer__nav-list">
        {item.nav.map((item, i) =>
            <li key={i}>
                <Link path to={item.link}>{item.name}</Link>
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