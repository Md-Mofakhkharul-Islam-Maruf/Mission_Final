import React from 'react';
import './bottle.css'

const Bottle = ({ bottle, handleaddCart }) => {
    console.log(bottle)
    const { name, img, price, stock } = bottle
    return (
        <div className='bottle-card'>
            <img src={img} alt="" />
            <div className='flex'>
                <p>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <p>Availability : {stock} piece remaining</p>
            <button onClick={() => handleaddCart(bottle)}>Buy now</button>
        </div>
    );
};

export default Bottle;