import React from 'react';
import './style.scss';

let nav1 = [
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


];
let nav2 = [
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


];

const FooterNav = () => (

    <>
    <ul className="footer__nav-list">
        {nav1.map((item, i) =>
            <li key={i}>
                <a href={item.link}>{item.name}</a>
            </li>
        )}
    </ul>
    <ul className="footer__nav-list">
        {nav2.map((item, i) =>
            <li key={i}>
                <a href={item.link}>{item.name}</a>
            </li>
        )}
    </ul>
    </>


);

export default FooterNav;