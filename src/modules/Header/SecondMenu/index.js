import React from 'react';
import './style.scss';
// import showMenu from './../Navigation';

let data = [
    {'nav': [
        {

            'name': 'Одежда',
            'link': 'https://google.com'
        },
        {
            'name': 'Обувь',
            'link': 'Сумки и аксессуары'
        },
        {
            'name': 'Одежда',
            'link': 'https://google.com'
        },
        {
            'name': 'Распродажа',
            'link': 'https://google.com'
        }
    ],
    'menu':'woman'},

    {'nav':[
        {
            'name': 'Одежда',
            'link': 'https://google.com'
        },
        {
            'name': 'Обувь',
            'link': 'Сумки и аксессуары'
        },
        {
            'name': 'Одежда',
            'link': 'https://google.com'
        }

    ],
    'menu': 'man'}


];
const SecondMenu = (showMenu) => (

    <>
    <nav className="header-secondmenu">
        {data.map((item, i) =>
        <ul key={i} className="header-secondmenu__navigation content-container" data-menu={data[i].menu}>
            {item.nav.map((item,i) =>
                <li key={i} className="header-secondmenu__navigation_category">
                        <a href={item.link}>{item.name}</a>
                </li>
            )}
        </ul>
        )}
    </nav>
    </>

);

export default SecondMenu;