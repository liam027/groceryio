import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import filterReducer from './reducers/filterReducer'
import productReducer from './reducers/productReducer'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import userReducer from './reducers/userReducer'
import messageReducer from './reducers/messageReducer'
import viewReducer from './reducers/viewReducer'

const reducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  user: userReducer,
  message: messageReducer,
  view: viewReducer
})

const store = createStore(reducer)

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    , document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
