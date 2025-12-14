import React from 'react';

const ProductForm = ({handleAddProduct}) => {

    const handleSubmit = (e) => {

        e.preventDefault()
        const fieldValue = e.target
        const name = fieldValue.name.value
        const price = fieldValue.price.value
        const quantity = fieldValue.quantity.value
        const Product = {
            name, price, quantity
        }
        handleAddProduct(Product)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="name" name="name" id="" placeholder='name' required /><br />
                <input type="price" name="price" id="" placeholder='price' required /><br />
                <input type="quantity" name="quantity" placeholder='quantity' id="" required /><br />
                <input type="submit" name="email" id="" value='submit' />
            </form>
        </div>
    );
};

export default ProductForm;