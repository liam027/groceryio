import React from 'react'
import PropTypes from 'prop-types'
import './notification.css'

const Notification = ({ message }) => {
  console.log(message)

  return (
    <div className="message">{message}</div>
  )
}

Notification.propTypes = {
  errorMessage: PropTypes.string,
}

export default Notification
