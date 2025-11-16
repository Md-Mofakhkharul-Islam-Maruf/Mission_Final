import React from 'react';
import './bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle)
    const {id, name, img} = bottle
    return (
        <div className='bottle-card'>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;