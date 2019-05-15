import React from 'react';
import './style.scss';
import H2Title from './../../../components/H2Title';
import Btn from './../../../components/Btn';
import FaqList from './FaqList'
import FaqListToggle from './FaqListToggle'
let questions = [
    {'title' : 'Что если я не могу определиться с размером?', 'content':'content'},
    {'title' : 'Если мне ничего не подошло?', 'content':'content'},
    {'title' : 'Как получить бесплатную доставку с примеркой?', 'content':'content'},
    {'title' : 'Мне придется ждать торгового представителя целый день?', 'content':'Нет. Торговый представитель приедет в тот временной интервал, который вы указали при оформлении заказа. Если вы точно знаете, в какое время нужен заказ, закажите доставку в течение выбранного часа или 15-ти минут.'},
    {'title' : 'Где должен находиться торговый представитель, пока я примеряю одежду?', 'content':'content'},
    {'title' : 'Что такое постамат?', 'content':'content'}
];


function DeliveryFaq() {
    return (
        <section className="section__delivery-faq">
            <div className="container">
               <H2Title title='Вопросы и ответы'/>
               <FaqList questions={questions}/>
                <Btn title ="Задать вопрос"/>
                <FaqListToggle questions={questions}/>
            </div>
        </section>
    );
}

export default DeliveryFaq;
