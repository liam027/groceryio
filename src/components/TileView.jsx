import './tileView.css'
import PropTypes from 'prop-types'
import React from 'react'
import TileItem from './TileItem'

const TileView = ({ products }) => {

  const populateProductCards = (prods) => (
    <>
      {prods.map((product) => (
        <TileItem key={product.id} product={product}/>
      ))}
    </>
  )

  return (
    <div id="tileView">
      { populateProductCards(products) }
    </div>
  )
}

TileView.propTypes = {
  products: PropTypes.array.isRequired,
}

export default TileView
