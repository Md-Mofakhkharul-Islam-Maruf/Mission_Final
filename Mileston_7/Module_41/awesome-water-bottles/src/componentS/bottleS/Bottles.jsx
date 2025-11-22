import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottlE/Bottle';
import './bottles.css'
import { addToStoredCart, getStoreCart, removeFromCart } from '../../utilities/localstorage';
import Cart from '../cart/Cart';

const Bottles = ({ bottlesPromise }) => {

    const bottles = use(bottlesPromise)
    console.log(bottles.length)


    const [cart, setCart] = useState([])


    //UseEffect
    useEffect(() => {
        const storedCartIds = getStoreCart()
        console.log(storedCartIds, bottles)

        const storedCart = []

        for (const id of storedCartIds) {
            console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id)
            if (cartBottle) {
                storedCart.push(cartBottle)
            }
        }
        setCart(storedCart)
    }, [bottles])


    const handleaddCart = (bottle) => {
        // console.log('Added to cart succesfully :', bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)

        //save the bottle id in the storage
        addToStoredCart(bottle.id)
    }

    const handleRemoveFromCart = (id)=>{
        console.log('Remove item from cart')
        const reaminingCart = cart.filter(bottle=>bottle.id !==id)
        setCart(reaminingCart)
        removeFromCart(id)
        
    }
    return (
        <div>
            <h3>All bottles are: {bottles.length}</h3>
            <h5>Added bottle: {cart.length}</h5>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottole-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleaddCart={handleaddCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;