import React, { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductTable from '../ProductTable/ProductTable';

const ProductManagement = () => {
    const [product, setProduct] = useState([])
    const handleAddProduct = newProduct => {
        const finalProduct = [...product, newProduct]
        setProduct(finalProduct)
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductManagement;