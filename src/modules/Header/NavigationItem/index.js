import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


const NavigationItem = ({item,mouseEnter}) => (

            <li className="header-menu__navigation_category" data-menu={item.menu} onMouseEnter={mouseEnter}>
                {item.title}
            </li>

);
NavigationItem.propTypes ={
    item : PropTypes.object,
    mouseEnter : PropTypes.func
};

export default NavigationItem;
