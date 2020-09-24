import PropTypes from 'prop-types';
import React, { useState } from 'react'

const ProductForm = ({ addProduct, setMessage }) => {
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

  const submitProduct = (event) => {
    event.preventDefault();
    const productObj = {
      name: newProduct,
      category: 'produce',
      quantity: 0
    };
    addProduct(productObj)
    setNewProduct('')
  }

  return (
    <div id="productForm-container">
      <form id="productForm" onSubmit={submitProduct}>
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
