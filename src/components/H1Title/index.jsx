import React from 'react';
import PropTypes from 'prop-types'

const H1Title = ({title}) => (
    <h1>{title}</h1>

);

H1Title.propTypes = {
    title: PropTypes.string
};

H1Title.defaultProps = {

    title: 'Заголовок H1'
};
export default H1Title;