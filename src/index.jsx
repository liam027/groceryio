import { applyMiddleware, combineReducers, createStore } from 'redux'
import App from './components/App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

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
