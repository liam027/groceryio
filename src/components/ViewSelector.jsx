import APP_STATES from '../states'
import React from 'react'
import PropTypes from 'prop-types'
import './viewSelector.css'

const ViewSelector = ({ setAppState }) => {

  return (
    <div id="view-selector">
      <span className="view-option list" onClick={ () => setAppState(APP_STATES.LIST) }>LIST</span>
      <span className="view-option tile" onClick={ () => setAppState(APP_STATES.TILE) }>TILE</span>
    </div>
  )
}

ViewSelector.propTypes = {
  errorMessage: PropTypes.string,
}

export default ViewSelector
