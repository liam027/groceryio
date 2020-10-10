import './listItem.css'
import PropTypes from 'prop-types'
import React from 'react'
import useProductCounter from '../hooks/useProductCounter'

const ListItem = ({ product }) => {
  const counter = useProductCounter(product)

  return (
    <div className="list-card">
      <div className='counter centered-flex'>
        <span>{product.name}</span>
      </div>
      <div className='counter centered-flex pointer'>
        <span onClick={counter.dec}>-</span>
      </div>
      <div className='counter centered-flex'>
        <span>{counter.count}</span>
      </div>
      <div className='counter centered-flex pointer'>
        <span onClick={counter.inc}>+</span>
      </div>
    </div>
  )
}

ListItem.checkPropTypes = {
  product: PropTypes.object.isRequired,
}

export default ListItem



