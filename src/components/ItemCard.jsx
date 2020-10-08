import './itemCard.css'
import PropTypes from 'prop-types'
import React from 'react'
import { deleteProduct } from '../reducers/productReducer'
import { useDispatch } from 'react-redux'
import useProductCounter from '../hooks/useProductCounter'

const ItemCard = ({ product }) => {
  const dispatch = useDispatch()
  const counter = useProductCounter(product)

  return (
    <div className="itemCard">
      <div className="name" onClick={counter.inc} >{product.name.toUpperCase()}</div>
      <div className="controls">
        <div className="delete noselect" onClick={() => dispatch(deleteProduct(product.id))}>X</div>
        <div className="quantity noselect" onClick={counter.dec}>{counter.count}</div>
      </div>
    </div>
  )
}

ItemCard.checkPropTypes = {
  product: PropTypes.object.isRequired,
}

export default ItemCard
