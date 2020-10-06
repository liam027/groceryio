import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMessage } from '../reducers/messageReducer'
import './productForm.css'

const ProductForm = ({ addProduct }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const MAX_PRODUCT_NAME_LENGTH = 28

  const handleNameChange = (event) => {
    if (event.target.value.length < MAX_PRODUCT_NAME_LENGTH) {
      setName(event.target.value)
      dispatch(setMessage(''))
    }
    else {
      dispatch(setMessage(`The new product name you provided is too long. Please make it less than ${MAX_PRODUCT_NAME_LENGTH} characters.`))
    }
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const submitProduct = (event) => {
    event.preventDefault()
    const productObj = {
      name: name,
      category: category,
      quantity: 0
    }
    addProduct(productObj)
    setName('')
    history.push('/')
  }

  const closeForm = () => {
    setName('')
    history.push('/')
  }

  return (
    <div id="product-form-splash">
      <div id="product-form-container">
        <Link to="/">
          <div className="close-btn emph" onClick={closeForm}>
            <div>X</div>
          </div>
        </Link>
        <form id="product-form" onSubmit={submitProduct}>
          <div className="header">
            <div>Add Product</div>
          </div>
          <div className="label-container emph">
            <label className="label">Name</label>
            <input id="new-product-input" value={name} onChange={handleNameChange} />
          </div>
          <div className="label-container emph">
            <label className="label">Category</label>
            <select defaultValue='produce' onChange={handleCategoryChange}>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="frozen">Frozen</option>
              <option value="meat">Meat</option>
            </select>
          </div>
          <div>
            <button type="submit" id="product-submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

ProductForm.propTypes = {
  errorMessage: PropTypes.string,
}

export default ProductForm
