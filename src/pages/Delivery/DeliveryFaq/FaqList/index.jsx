import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import QuestionItem from './../QuestionItem'

const FaqList = ({questions}) => (


        <ul className="delivery-faq__list">


            {questions.map((question, i) =>
                <QuestionItem question={question} key={i}/>
            )}
        </ul>


);
FaqList.propTypes = {
    questions: PropTypes.array
};

export default FaqList;