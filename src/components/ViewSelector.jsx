import React from 'react';
import PropTypes from 'prop-types';
import './viewSelector.css';

const ViewSelector = ( {} ) => {

  return (
    <div id="view-selector">
      <span className="view-option grid">GRID</span>
      <span className="view-option tile">TILE</span>
    </div>
  );
};

ViewSelector.propTypes = {
  errorMessage: PropTypes.string,
};

export default ViewSelector;
