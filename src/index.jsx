import { combineReducers, createStore } from 'redux'
import App from './components/App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import filterReducer from './reducers/filterReducer'
import messageReducer from './reducers/messageReducer'
import productReducer from './reducers/productReducer'
import userReducer from './reducers/userReducer'
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
