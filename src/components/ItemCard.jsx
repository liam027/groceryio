import './itemCard.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { deleteProduct } from '../reducers/productReducer'
import { useDispatch } from 'react-redux'

const ItemCard = ({ product }) => {
  const dispatch = useDispatch()
  const MAX_QUANTITY = 99
  const [quantity, setQuantity] = useState(product.quantity)

  const increaseByOne = () => {
    if (quantity < MAX_QUANTITY) {
      setQuantity(quantity + 1)
    }
  }
  const decreaseByOne = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="itemCard">
      <div className="name" onClick={increaseByOne} >{product.name.toUpperCase()}</div>
      <div className="controls">
        <div className="delete noselect" onClick={() => dispatch(deleteProduct(product.id))}>X</div>
        <div className="quantity noselect" onClick={decreaseByOne}>{quantity}</div>
      </div>
    </div>
  )
}

ItemCard.checkPropTypes = {
  product: PropTypes.object.isRequired,
}

export default ItemCard
