import React from 'react';
import './style.scss';

let data = [
    {'nav':[
        {
            'link': 'https://google.com',
            'name': 'О компании'
        },
        {
            'link': 'https://google.com',
            'name': 'Контакты'
        },
        {
            'link': 'https://google.com',
            'name': 'Доставка и оплата'
        },
        {
            'link': 'https://google.com',
            'name': 'Гарантии'
        },
        {
            'link': 'https://google.com',
            'name': 'Договор оферты'
        },
        {
            'link': 'https://google.com',
            'name': 'Политика безопасности'
        }


    ] },
    {'nav': [
        {
            'link': 'https://google.com',
            'name': 'Новости'
        },
        {
            'link': 'https://google.com',
            'name': 'Акции'
        },
        {
            'link': 'https://google.com',
            'name': 'Хиты продаж'
        },
        {
            'link': 'https://google.com',
            'name': 'Блог'
        }
    ]

    }

];

const FooterNav = () => (

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

export default FooterNav;