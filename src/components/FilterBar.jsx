import './filterBar.css'
import Button from './Button'
import React from 'react'

const FilterBar = ({ filters, defineFilter }) => {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <Button key={filter} variant="contained" className="filter-button" onClick={() => defineFilter(filter)}>{filter.toUpperCase()}</Button>
      ))}
    </div>
  )
}

export default FilterBar
