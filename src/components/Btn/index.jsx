import React from 'react';
import PropTypes from 'prop-types'
import './style.scss';

const Btn =({title}) =>(
    <button className="btn">{title}</button>

);
Btn.propTypes = {
    title: PropTypes.string
};

Btn.defaultProps = {

    title: 'Кнопка'
};
export default Btn;