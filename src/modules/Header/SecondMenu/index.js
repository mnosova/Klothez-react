import React from 'react';
import './style.scss';
import SecondMenuItem from './../SecondMenuItem';
import PropTypes from 'prop-types';


const SecondMenu = ({showMenu,mouseLeave, navigation}) => {
    if (showMenu !== null) {
        return(

            <nav className="header-secondmenu" onMouseLeave={mouseLeave}>
                <ul className="header-secondmenu__navigation content-container">
                    {navigation[showMenu].map((item,i) =>
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

SecondMenu.propTypes ={
    showMenu : PropTypes.number,
    mouseLeave :PropTypes.func,
    navigation: PropTypes.array
};
export default SecondMenu;