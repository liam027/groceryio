import ReactDOM from 'react-dom'
import React from 'react';
import App from './components/App.js'

const products = [
  { name: 'apple', quantity: 5 },
  { name: 'bananas', quantity: 1 },
  { name: 'oranges', quantity: 1 },
]

ReactDOM.render(<App products={products} />, document.getElementById('root'))
