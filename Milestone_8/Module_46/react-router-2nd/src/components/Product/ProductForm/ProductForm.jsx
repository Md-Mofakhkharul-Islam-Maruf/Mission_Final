import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {

    const [error, setError] = useState('')


    const handleSubmit = (e) => {

        e.preventDefault()
        const fieldValue = e.target
        const name = fieldValue.name.value
        const price = fieldValue.price.value
        const quantity = fieldValue.quantity.value
        const Product = {
            name, price, quantity
        }

        if (name.length < 1) {
            setError('enter Product name')
            return
        }
        else if (price.length < 1) {
            setError('Price must be greater')
            return
        }
        else if (quantity.length === 0) {
            setError('Must have a Quantity')
            return
        }
        else {
            setError('')
        }


        handleAddProduct(Product)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="name" name="name" id="" placeholder='name'  /><br />
                <input type="price" name="price" id="" placeholder='price'  /><br />
                <input type="quantity" name="quantity" placeholder='quantity' id=""  /><br />
                <input type="submit" name="email" id="" value='submit' />
            </form>
            <p style={{color: 'red'}}>{error}</p>
        </div>
    );
};

export default ProductForm;