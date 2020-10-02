import React from 'react'
import './filterBar.css'

const FilterBar = ({ filters, defineFilter }) => {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <span key={filter} className="filter-button" onClick={() => defineFilter(filter)}>{filter.toUpperCase()}</span>
      ))}
    </div>
  )
}

export default FilterBar
