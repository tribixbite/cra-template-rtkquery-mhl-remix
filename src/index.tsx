// Entry point file that renders the React component tree
/* eslint-disable react/no-render-return-value */
// import React from 'react'
import * as React from 'react';
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'

// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import App from './App'
import { store } from './app/store'
// import { api } from './app/services/api/api'

import { worker } from './mocks/browser'

// TODO: SWITCH PROVIDER TO ApiProvider https://redux-toolkit.js.org/rtk-query/api/ApiProvider
// Here's an example: https://codesandbox.io/s/8tx2b

// Initialize the msw worker, wait for the service worker registration to resolve, then mount
worker.start({ quiet: true }).then(() =>
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
)