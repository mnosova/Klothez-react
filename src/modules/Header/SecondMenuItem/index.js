import React from 'react';
import PropTypes from 'prop-types';




const SecondMenuItem = ({item}) => (

    <>

                    <li className="header-secondmenu__navigation_category">
                        <a href={item.link}>{item.name}</a>
                    </li>

    </>

);

SecondMenuItem.propTypes ={
    item : PropTypes.object
};
export default SecondMenuItem;