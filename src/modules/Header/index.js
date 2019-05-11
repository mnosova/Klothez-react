import React from 'react';
import './style.scss';
import MobMenu from './MobMenu';
import SecondMenu from './SecondMenu';
import Navigation from './Navigation';
function Header() {
    return (
        <header>
            <div className="header-menu">
                <div className="content-container row no-column">
                    {/*eslint-disable-next-line*/}
                    <div><a href="https://google.com" className="header-menu__logo"/></div>
                  <Navigation/>
                    <form className="header-menu__search icon--search" id="header-search">
                        <input className="header-menu__search-input" type="text" placeholder="Поиск товаров"/>
                    </form>
                    <div className="header-menu__login icon--user">Войти</div>
                </div>
            </div>
            <SecondMenu/>
            <div className="header-mob-menu">
                <div className="content-container row no-column">
            <MobMenu/>
                </div>
            </div>
        </header>

    );
}

export default Header;
