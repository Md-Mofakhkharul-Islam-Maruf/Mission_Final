import React, { use, useState } from 'react';
import Bottle from '../bottlE/Bottle';
import './bottles.css'

const Bottles = ({ bottlesPromise }) => {

    const bottles = use(bottlesPromise)
    console.log(bottles.length)

    const [cart, setCart] = useState([])

    const handleaddCart = (bottle) => {
        // console.log('Added to cart succesfully :', bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)
    }
    return (
        <div>
            <h3>All bottles are: {bottles.length}</h3>
            <h5>Added bottle: {cart.length}</h5>
            <div className='bottole-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleaddCart={handleaddCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;