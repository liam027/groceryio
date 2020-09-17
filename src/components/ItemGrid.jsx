import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import './itemGrid.css';

const ItemGrid = ({ products, deleteProduct }) => {

  const populateProductCards = (prods) => (
    <>
      {prods.map((product) => (
        <ItemCard key={product.name} product={product} deleteProduct={deleteProduct} />
      ))}
    </>
  );

  return (
    <div id="itemGrid">
      { populateProductCards(products) }
    </div>
  );
};

ItemGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemGrid;
