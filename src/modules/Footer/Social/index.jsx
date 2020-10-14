import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';



const Social = ({social}) => (

    <>
    <ul className="footer__social-list">
        {social.map((item, i) =>
            <li key={i}>
                {/*eslint-disable-next-line*/}
                <a className={'icon ' + item.class} href={item.link}></a>
            </li>
        )}
    </ul>

    </>


);
Social.propTypes ={
    social : PropTypes.array
};

export default Social;