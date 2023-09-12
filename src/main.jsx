import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import itemReducer, {getTotals} from './features/cartItem.js'

const store = configureStore({
  reducer: {
    cart: itemReducer,
  }
})

store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
