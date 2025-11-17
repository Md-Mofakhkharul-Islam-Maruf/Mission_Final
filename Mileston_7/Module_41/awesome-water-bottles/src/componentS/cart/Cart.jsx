import React from 'react';
import './cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            {
                cart.map(bottle =>
                    <div className='cart-containerr'>
                        {/* key={bottle.id} */}
                        <img src={bottle.img} alt="" />
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>X</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;