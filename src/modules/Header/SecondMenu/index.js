import React from 'react';
import './style.scss';

let nav1 = [
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


];

let nav2 = [


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


];

const SecondMenu = () => (

    <>
    <nav className="header-secondmenu">
        <ul className="header-secondmenu__navigation content-container">
            {nav1.map((item, i) =>
                <li key={i} className="header-secondmenu__navigation_category">
                    <a href={item.link}>{item.name}</a>
                </li>
            )}
        </ul>
        <ul className="header-secondmenu__navigation content-container">
            {nav2.map((item, i) =>
                <li key={i} className="header-secondmenu__navigation_category">
                    <a href={item.link}>{item.name}</a>
                </li>
            )}
        </ul>
    </nav>
    </>

);

export default SecondMenu;