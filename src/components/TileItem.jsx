import './tileItem.css'
import PropTypes from 'prop-types'
import React from 'react'
import useProductCounter from '../hooks/useProductCounter'

const TileItem = ({ product }) => {
  const counter = useProductCounter(product)

  return (
    <div className="tile-item">
      <div className="name" onClick={counter.inc} >{product.name.toUpperCase()}</div>
      <div className="controls">
        <div className="quantity noselect" onClick={counter.dec}>-</div>
        <div className="delete noselect">{counter.count}</div>
        <div className="quantity noselect" onClick={counter.inc}>+</div>
      </div>
    </div>
  )
}

TileItem.checkPropTypes = {
  product: PropTypes.object.isRequired,
}

export default TileItem
