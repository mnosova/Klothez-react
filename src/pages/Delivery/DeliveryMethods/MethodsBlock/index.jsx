import React from 'react';
import './style.scss';

let data =[
    {

        'title':'Курьерская доставка',
        'text':'Вы сами решаете, куда и когда доставить заказ. И сами выбираете, какие вещи оплатить, а какие – вернуть торговому представителю.',
        'li':[
            'Подходящая дата и время доставки',
            'Разные интервалы доставки: от 15 минут',
            'В 150+ городах доставка на следующий день'
        ],
        'img':[
            './img/img-1.jpg',
            './img/img-1@2x.jpg',
            './img/img-1@3x.jpg'
        ]

    },
    {   'title':'Самовывоз',
        'text':'Хотите забрать заказ самостоятельно? Оформите доставку в один из пунктов выдачи заказов.',
        'li':[
            'Более 6 000 пунктов по всей стране',
            'Удобные часы работы и расположение',
            'Возможность выбрать пункт с примерочными'
        ],
        'img':[
            './img/img-2.jpg',
            './img/img-2@2x.jpg',
            './img/img-2@3x.jpg'
        ]

    }
];

const MethodsBlock = ()=> (
    <>
    {data.map((item,i) =>
        <div className="delivery-methods__block" key={i}>
            <img alt="" className="delivery-methods__image" src={require(''+item.img[0]+'')} srcSet={require(''+item.img[0]+'')+ ' 1.5x,' + require(''+item.img[0]+'') + '2.5x'}/>
            <h3>{item.title}</h3>
            <p className="delivery-methods__text">{item.text}</p>
            <ul className="delivery-methods__list">
               {item.li.map((li,i)=>
                  <li className="delivery-methods__list-item" key={i}>
                      {li}
                  </li>
                   )}

            </ul>

        </div>
    )}

</>


);

export default MethodsBlock;
