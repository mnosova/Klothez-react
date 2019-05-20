import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';


const MobMenu = ({mobmenu}) => (
    <>
        {mobmenu.map((item,i) =>
            <div key={i} className={'header-mob-menu'+item.elem+' ' +item.class}>

            </div>
        )}
  </>

);

MobMenu.propTypes ={
    mobmenu : PropTypes.array
};

export default MobMenu;