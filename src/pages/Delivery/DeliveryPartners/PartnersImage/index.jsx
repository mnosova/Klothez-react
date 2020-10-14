import React from 'react';
import './style.scss';
let data = [
    {
        'src' : './img/partner-5.png',
        'set1':'./img/partner-5@2x.png',
        'set2':'./img/partner-5@3x.png'
    },
    {
        'src' : './img/partner-1.png',
        'set1':'./img/partner-1@2x.png',
        'set2':'./img/partner-1@3x.png'
    },
    {
        'src' : './img/partner-2.png',
        'set1':'./img/partner-2@2x.png',
        'set2':'./img/partner-2@3x.png'
    },
    {
        'src' : './img/partner-4.png',
        'set1':'./img/partner-4@2x.png',
        'set2':'./img/partner-4@3x.png'
    },
    {
        'src' : './img/partner-6.png',
        'set1':'./img/partner-6@2x.png',
        'set2':'./img/partner-6@3x.png'
    },
    {
        'src' : './img/partner-3.png',
        'set1':'./img/partner-3@2x.png',
        'set2':'./img/partner-3@3x.png'
    }

];


const PartnersImage = () => (
    <>
        {data.map((item,i) =>
            <div key={i}  className="delivery-partners__image">
                <img alt="" key={i} src={require(''+item.src+'')} srcSet={require(''+item.set1+'')+ ' 1.5x,' + require(''+item.set2+'') + '2.5x'}/>
            </div>
        )}
</>
);

export default PartnersImage;