// Entry point file that renders the React component tree
/* eslint-disable react/no-render-return-value */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Provider } from 'react-redux'
import App from './app/App'
import { store } from './app/store'

import { worker } from './mocks/browser'

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