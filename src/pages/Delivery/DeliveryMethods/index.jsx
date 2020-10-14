import React from 'react';
import './style.scss';
import MethodsBlock from './MethodsBlock/index'
import H2Title from '../../../components/H2Title/index'

function DeliveryMethods() {
    return (
        <section className="section__delivery-methods">
            <H2Title title='Способы доставки' className='center-text'/>
            <div className="container row">
                <MethodsBlock/>
            </div>
        </section>

    );
}

export default DeliveryMethods;
