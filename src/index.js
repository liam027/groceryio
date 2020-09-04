import ReactDOM from 'react-dom'
import React from 'react';
import './index.css'
import Header from './Header.js'
import ItemGrid from './ItemGrid.js'
import Total from './Total.js'

const App = () => {
  const title = 'Groceryio'
  const products = [
    {
      name: 'apple',
      quantity: 5
    }
  ]
  return (
    <div id="App">
      <Header title={title} />
      <ItemGrid products={products}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
