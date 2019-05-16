import React from 'react';
import './style.scss';



const SecondMenuItem = ({item}) => (

    <>

                    <li className="header-secondmenu__navigation_category">
                        <a href={item.link}>{item.name}</a>
                    </li>

    </>

);

export default SecondMenuItem;