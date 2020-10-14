import React from 'react';
import './style.scss';
import FooterNav from './FooterNav';
import Social from './Social';
import Payment from './Payment';

let navigation = [
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

let icons = [
    {'class': 'icon--master'},
    {'class': 'icon--visa'},
    {'class': 'icon--mir'}
];

let social = [
    {
        'link': 'https://google.com',
        'class': 'icon--fb'
    },
    {
        'link': 'https://google.com',
        'class': 'icon--inst'
    },
    {
        'link': 'https://google.com',
        'class': 'icon--google'
    },
    {
        'link': 'https://google.com',
        'class': 'icon--yt'
    }


];

function Footer() {
    return (

        <footer className="footer">
            <div className="content-container row ordered">
                <div className="footer__block-contact order-sm-4 center-text-sm">
                    <p>Москва, ул. Авиамоторная дом 50 с2</p>
                    <p><a href="tel:+78002007456"><b>8 800 200-7456</b></a></p>
                    <p><a href="mailto:info@klothez.ru">info@klothez.ru</a></p>
                    <div className="footer__text">
                        <p><b>Работаем без выходных</b></p>
                        <p>с 10.00 до 20.00, ежедневно</p>
                    </div>
                </div>
                <div className="footer__block-nav row no-column order-sm-1">
                    <FooterNav data={navigation}/>

                </div>
                <div className="footer__block_social order-sm-2 center-text-sm">
                    <p><b>Мы в социальных сетях</b></p>
                    <Social social={social}/>
                </div>
                <div className="footer__block_payment order-sm-3 center-text-sm">
                    <p><b>Принимаем к оплате</b></p>
                   <Payment icons={icons}/>
                    <p><a href="https://google.com">Подробнее об оплате</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
