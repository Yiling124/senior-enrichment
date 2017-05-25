'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store'
import Home from './containers/Home'

ReactDOM.render (
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('main')
)
