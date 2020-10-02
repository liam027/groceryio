import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './itemCard.css'

const ItemCard = ({ product, deleteProduct }) => {
  const MAX_QUANTITY = 99
  const [quantity, setQuantity] = useState(product.quantity)
  const { name } = product

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
      <div className="name" onClick={increaseByOne} >{name.toUpperCase()}</div>
      <div className="controls">
        <div className="noselect" onClick={() => deleteProduct(product.id)}>X</div>
        <div className="quantity noselect" onClick={decreaseByOne}>{quantity}</div>
      </div>
    </div>
  )
}

ItemCard.checkPropTypes = {
  product: PropTypes.object.isRequired,
}

export default ItemCard
