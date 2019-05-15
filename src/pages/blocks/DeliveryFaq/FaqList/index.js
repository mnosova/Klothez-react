import React from 'react';
import './style.scss';
import QuestionItem from './../QuestionItem';

const FaqList = ({questions}) => (

        <ul className="delivery-faq__list">
            {questions.map((question,i) =>
            <QuestionItem question={question} key={i}/>

            )}

        </ul>

);

export default FaqList;