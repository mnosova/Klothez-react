import React from 'react';
import './style.scss';
let data = [
    {'elem' : '__nav', 'class':'icon--humburger'},
    {'elem' : '__logo', 'class':'icon--logo'},
    {'elem' : '__search', 'class':'icon--search'},
    {'elem' : '__login', 'class':'icon--user'},
    {'elem' : '__favor', 'class':'icon--heart'},
    {'elem' : '__cart', 'class':'icon--cart'}
];


const MobMenu = () => (
    <>
        {data.map((item,i) =>
            <div key={i} className={'header-mob-menu'+item.elem+' ' +item.class}>

            </div>
        )}
  </>

);

export default MobMenu;