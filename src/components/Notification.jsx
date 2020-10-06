import React from 'react'
import PropTypes from 'prop-types'
import './notification.css'
import { useSelector } from 'react-redux'

const Notification = () => {
  let message = useSelector(state => state.message)

  return (
    <div className="message">{message}</div>
  )
}

Notification.propTypes = {
  errorMessage: PropTypes.string,
}

export default Notification
