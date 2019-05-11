import React from 'react';
import './style.scss';
import FooterNav from './FooterNav';
import Social from './Social';
import Payment from './Payment';
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
                    <FooterNav/>

                </div>
                <div className="footer__block_social order-sm-2 center-text-sm">
                    <p><b>Мы в социальных сетях</b></p>
                    <Social/>
                </div>
                <div className="footer__block_payment order-sm-3 center-text-sm">
                    <p><b>Принимаем к оплате</b></p>
                   <Payment/>
                    <p><a href="https://google.com">Подробнее об оплате</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
