import React,{Component} from 'react';
import './style.scss';
import MobMenu from './MobMenu';
import SecondMenuItem from './SecondMenuItem';
import NavigationItem from './NavigationItem';

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
let data2 = [
 [
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

   [
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

    ]


];

// let data3 = [
//
//         {
//
//             'name': 'Одежда',
//             'link': 'https://google.com'
//         },
//         {
//             'name': 'Обувь',
//             'link': 'Сумки и аксессуары'
//         },
//         {
//             'name': 'Одежда',
//             'link': 'https://google.com'
//         },
//         {
//             'name': 'Распродажа',
//             'link': 'https://google.com'
//         }
//
//
//
//
// ];


class Header extends Component{

    state={
        openMenu: null
    };
    render(){
        return (
            <header>
                <div className="header-menu">
                    <div className="content-container row no-column">
                        {/*eslint-disable-next-line*/}
                        <div><a href="https://google.com" className="header-menu__logo"/></div>

                        <ul className="header-menu__navigation">
                            {data.map((item, i) =>
                                <NavigationItem item={item} key={i} mouseEnter={this.showMenu.bind(this,i)} />
                            )}
                        </ul>

                        <form className="header-menu__search icon--search" id="header-search">
                            <input className="header-menu__search-input" type="text" placeholder="Поиск товаров"/>
                        </form>
                        <div className="header-menu__login icon--user">Войти</div>
                    </div>
                </div>
                <SecondMenu showMenu={(this.state.openMenu)} mouseLeave={this.hideMenu}/>
                <div className="header-mob-menu">
                    <div className="content-container row no-column">
                        <MobMenu/>
                    </div>
                </div>
            </header>

        )
    }
     showMenu =(i)=>{
        this.setState({
            openMenu: i
        })
    };
    hideMenu =()=> {
        this.setState({
            openMenu: null
        })

    }




}

const SecondMenu = ({showMenu,mouseLeave}) => {
    if (showMenu !== null) {
        return(

                <nav className="header-secondmenu" onMouseLeave={mouseLeave}>
                    <ul className="header-secondmenu__navigation content-container">
                        {data2[showMenu].map((item,i) =>
                            <SecondMenuItem key={i} item={item}/>

                        )}
                    </ul>
                </nav>
            )


    }else {
        return(
            null
        )

    }

};






export default Header;
