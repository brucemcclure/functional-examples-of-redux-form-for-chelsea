import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux' // The new "parent component of the app"
import { createStore } from 'redux' // 1) Function to create the global state 'store' NB must pass it reducers. 2) Applies middleware
import * as serviceWorker from './serviceWorker'
import reducers from './reducers'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
