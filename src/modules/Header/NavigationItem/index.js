import React from 'react';
import './style.scss';


const NavigationItem = ({item,mouseEnter}) => (

            <li className="header-menu__navigation_category" data-menu={item.menu} onMouseEnter={mouseEnter}>
                {item.title}
            </li>

);


export default NavigationItem;
