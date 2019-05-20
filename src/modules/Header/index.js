import React,{Component} from 'react';
import './style.scss';
import MobMenu from './MobMenu';
import SecondMenu from './SecondMenu';
import NavigationItem from './NavigationItem';

let category = [
    {
        'title': 'Женщинам',
        'menu':'woman'
    },
    {
        'title': 'Мужчинам',
        'menu':'man'
    }


];
let navigation = [
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

let mobmenu = [
    {'elem' : '__nav', 'class':'icon--humburger'},
    {'elem' : '__logo', 'class':'icon--logo'},
    {'elem' : '__search', 'class':'icon--search'},
    {'elem' : '__login', 'class':'icon--user'},
    {'elem' : '__favor', 'class':'icon--heart'},
    {'elem' : '__cart', 'class':'icon--cart'}
];



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
                            {category.map((item, i) =>
                                <NavigationItem item={item} key={i} mouseEnter={this.showMenu.bind(this,i)} />
                            )}
                        </ul>

                        <form className="header-menu__search icon--search" id="header-search">
                            <input className="header-menu__search-input" type="text" placeholder="Поиск товаров"/>
                        </form>
                        <div className="header-menu__login icon--user">Войти</div>
                    </div>
                </div>
                <SecondMenu showMenu={(this.state.openMenu)} mouseLeave={this.hideMenu} navigation={navigation}/>
                <div className="header-mob-menu">
                    <div className="content-container row no-column">
                        <MobMenu mobmenu={mobmenu}/>
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







export default Header;
