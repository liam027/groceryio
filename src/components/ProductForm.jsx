import PropTypes from 'prop-types';
import React, { useState } from 'react'
import productService from '../services/products'

const ProductForm = ( { setProducts, setMessage, products } ) => {
  const [newProduct, setNewProduct] = useState('')
  const MAX_PRODUCT_NAME_LENGTH = 28;

  const handleNewProductChange = (event) => {
    if (event.target.value.length < MAX_PRODUCT_NAME_LENGTH) {
      setNewProduct(event.target.value);
      setMessage(``);
    }
    else {
      setMessage(`The new product name you provided is too long. Please make it less than ${MAX_PRODUCT_NAME_LENGTH} characters.`);
    }
  }

  const addProduct = (event) => {
    event.preventDefault();
    const productObj = {
      name: newProduct,
      category: 'produce',
      quantity: 0
    };
    productService
      .create(productObj)
      .then(newProduct => {
        setProducts(products.concat(newProduct));
        setNewProduct('');
        setMessage(`${newProduct.name} was added to your list.`)
      })
  }

  return (
    <div id="productForm-container">
    <form id="productForm" onSubmit={addProduct}>
      <input value={newProduct} onChange={handleNewProductChange} />
      <button type="submit" id="submitProductButton">Save</button>
    </form>
  </div>
  );
};

ProductForm.propTypes = {
  errorMessage: PropTypes.string,
};

export default ProductForm;
