import './listView.css'
import ListItem from './ListItem'
import PropTypes from 'prop-types'
import React from 'react'

const ListView = ({ products }) => {

  return (
    <div id="list-view">
      {products.map((product) => (
        <ListItem key={product.id} product={product} />
      ))}
    </div>
  )
}

ListView.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ListView
