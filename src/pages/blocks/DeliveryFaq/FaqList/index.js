import React from 'react';
import './style.scss';
let data = [
    {'title' : 'Что если я не могу определиться с размером?', 'content':'content'},
    {'title' : 'Если мне ничего не подошло?', 'content':'content'},
    {'title' : 'Как получить бесплатную доставку с примеркой?', 'content':'content'},
    {'title' : 'Мне придется ждать торгового представителя целый день?', 'content':'Нет. Торговый представитель приедет в тот временной интервал, который вы указали при оформлении заказа. Если вы точно знаете, в какое время нужен заказ, закажите доставку в течение выбранного часа или 15-ти минут.'},
    {'title' : 'Где должен находиться торговый представитель, пока я примеряю одежду?', 'content':'content'},
    {'title' : 'Что такое постамат?', 'content':'content'}
];


const FaqList = () => (

    <ul className="delivery-faq__list">
        {data.map((item,i) =>
            <li key={i} className="delivery-faq__list-item js-show">
                {item.title}

                <p  className="delivery-faq__content">{item.content}</p>

            </li>
        )}
    </ul>

);

export default FaqList;