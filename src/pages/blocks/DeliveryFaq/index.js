import React from 'react';
import './style.scss';
import H2Title from './../../../components/H2Title';
import Btn from './../../../components/Btn';
import FaqList from './FaqList'
function DeliveryFaq() {
    return (
        <section className="section__delivery-faq">
            <div className="container">
               <H2Title title='Вопросы и ответы'/>
                <FaqList/>
                <Btn title ="Задать вопрос"/>
            </div>
        </section>
    );
}

export default DeliveryFaq;
