import React from 'react';
import PropTypes from 'prop-types'

const H2Title = ({className,title}) => (
    <h2 className={className}>{title}</h2>

);

H2Title.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string
};

H2Title.defaultProps = {

    title: 'Заголовок H2'
};

export default H2Title;