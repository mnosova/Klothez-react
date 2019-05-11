import React from 'react';
import './style.scss';

let data = [
    {
        'link': 'https://google.com',
        'class': 'icon--fb'
    },
    {
        'link': 'https://google.com',
        'class': 'icon--inst'
    },
    {
        'link': 'https://google.com',
        'class': 'icon--google'
    },
    {
        'link': 'https://google.com',
        'class': 'icon--yt'
    }


];


const Social = () => (

    <>
    <ul className="footer__social-list">
        {data.map((item, i) =>
            <li key={i}>
                {/*eslint-disable-next-line*/}
                <a className={'icon ' + item.class} href={item.link}></a>
            </li>
        )}
    </ul>

    </>


);

export default Social;