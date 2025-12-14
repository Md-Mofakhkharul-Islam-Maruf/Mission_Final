import React from 'react';

const ProductTable = ({ product }) => {
    return (
        <div>
            <p>{product.length}</p>
            <table>
                <tr>
                    <td>Product No.</td>
                    <td>Product name</td>
                    <td>Product price</td>
                    <td>Product quantity</td>
                </tr>
                {
                    product.map((singleProduct,index) => <tr>
                        <td>{index+1}</td>
                        <td>{singleProduct.name}</td>
                        <td>{singleProduct.price}</td>
                        <td>{singleProduct.quantity}</td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default ProductTable;