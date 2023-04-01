import React from 'react'

import { Provider } from 'react-redux'
import { WagmiConfig } from 'wagmi'

import { wagmiClient } from 'config/web3'
import { ScreenSizeContextProvider } from 'contexts'
import store from 'state'

// All Global Provides that needed to wrap the App in here.
export const Providers: React.FC<any> = ({ children }) => {
  return (
    <Provider store={store}>
      <ScreenSizeContextProvider>
        <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>
      </ScreenSizeContextProvider>
    </Provider>
  )
}
