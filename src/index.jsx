import ReactDOM from 'react-dom'
import React from 'react';
import App from './components/App'

const products = [
  { name: 'apple', category: 'produce', quantity: 0 },
  { name: 'bananas', category: 'produce', quantity: 0 },
  { name: 'oranges', category: 'produce', quantity: 0 },
  { name: 'chicken', category: 'meat', quantity: 0 },
  { name: 'ham', category: 'meat', quantity: 0 },
  { name: 'ice cream', category: 'frozen', quantity: 0 },
];

ReactDOM.render(<App products={products} />, document.getElementById('root'))
