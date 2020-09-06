import React, { useState } from 'react'
import './itemCard.css';

const ItemCard = ({ product }) => {
  const MAX_QUANTITY = 99
  const [ quantity, setQuantity ] = useState(product.quantity)
  const name = product.name

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
      <div className="name">{name.toUpperCase()}</div>
      <div className="icon noselect" onClick={increaseByOne}>

      </div>

      <div className="controls">
        <div className="quantity noselect"onClick={decreaseByOne}>{quantity}</div>
      </div>
    </div>
  )
}

export default ItemCard;
