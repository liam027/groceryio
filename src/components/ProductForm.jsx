import './productForm.css'
import { Button, TextField } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createProduct } from '../reducers/productReducer'
import { setMessage } from '../reducers/messageReducer'
import { useDispatch } from 'react-redux'

const ProductForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const MAX_PRODUCT_NAME_LENGTH = 28
  const CATEGORIES = [
    'all',
    'produce',
    'dairy',
    'frozen',
    'meat',
  ]

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
    setName('')
    history.push('/')
    dispatch(createProduct(productObj))
  }

  const closeForm = () => {
    setName('')
    history.push('/')
  }

  const radioButton = (name) => {
    return (
      <div className="radio" key={name}>
        <label>
          <input
            type="radio"
            value={name}
            checked={category.toLowerCase() === name}
            onChange={handleCategoryChange}
          />
          {name}
        </label>
      </div>
    )
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
          <div>
            <TextField label='name' onChange={handleNameChange} />
          </div>
          <div className="label-container emph">
            <label className="label">Category</label>
            {CATEGORIES.map((category) => radioButton(category))}
          </div>
          <div>
            <Button type="submit" id="product-submit">Add Product</Button>
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
