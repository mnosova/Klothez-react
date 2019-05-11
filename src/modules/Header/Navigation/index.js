import React from 'react';
import './style.scss';

let data = [
    {
        'title': 'Женщинам'
    },
    {
        'title': 'Мужчинам'
    }


];


const Navigation = () => (


        <ul className="header-menu__navigation">
            {data.map((item, i) =>
                <li key={i} className="header-menu__navigation_category">
                    {item.title}
                </li>
            )}
        </ul>



);

export default Navigation;