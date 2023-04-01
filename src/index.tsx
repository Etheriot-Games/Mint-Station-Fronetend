import { Buffer } from 'buffer'

import React from 'react'

import ReactDOM from 'react-dom/client'

import { useResize } from 'hooks'
import { Providers } from 'Providers'
import 'theme/styles.css'

import App from './App'
import reportWebVitals from './reportWebVitals'

window.Buffer = window.Buffer || Buffer

const GlobalHooks = () => {
  // Global hooks that needed to call app's first rendering such as web3 gas price, wallet eager connection, etc
  useResize()

  return null
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Providers>
      <GlobalHooks />
      <App />
    </Providers>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
