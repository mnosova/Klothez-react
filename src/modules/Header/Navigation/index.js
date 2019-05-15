import React from 'react';
import './style.scss';

let data = [
    {
        'title': 'Женщинам',
        'menu':'woman'
    },
    {
        'title': 'Мужчинам',
        'menu':'man'
    }


];


const Navigation = () => (

        <ul className="header-menu__navigation">

            {data.map((item, i) =>
                <li key={i} className="header-menu__navigation_category" data-menu={item.menu} onMouseEnter={showMenu}>
                    {item.title}

                </li>
            )}
        </ul>



);

const showMenu =(e) => (
    console.log(e.target.dataset.menu)

);

export default Navigation;
