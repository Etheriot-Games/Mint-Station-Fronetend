import { useCallback } from 'react'

import { useAccount, useNetwork } from 'wagmi'

import { defaultNetworkMetadata, DEFAULT_CHAIN_ID, NetworkMetadata, SupportedChainId } from 'config/web3'

export const useWeb3 = () => {
  const { address, isConnected } = useAccount()
  const { chain, chains } = useNetwork()

  const getNetworkMetadata = useCallback(
    (chainId: SupportedChainId) => {
      const cData: NetworkMetadata = {
        chainName: 'Unsupported Chain',
        icon: '',
        isTestnet: false,
        symbol: '',
        chainId,
        blockExplorers: { name: '', url: '' },
      }
      const c = chains.find((chain: any) => chain.id === chainId)

      if (chainId in defaultNetworkMetadata) {
        cData.chainName = defaultNetworkMetadata[chainId].chainName
        cData.isTestnet = defaultNetworkMetadata[chainId].isTestnet
        cData.symbol = defaultNetworkMetadata[chainId].symbol
        cData.icon = defaultNetworkMetadata[chainId].icon
        cData.blockExplorers = defaultNetworkMetadata[chainId].blockExplorers
      } else if (c) {
        cData.chainName = c.name
        cData.isTestnet = !!c.testnet
        cData.symbol = c.nativeCurrency?.symbol || ''
      }
      return cData
    },
    [chains]
  )

  return {
    getNetworkMetadata,
    // error: account.error,
    address,
    chainId: chain ? chain.id : DEFAULT_CHAIN_ID,
    isConnected,
    isSupported: chain && chain.id in defaultNetworkMetadata,
  }
}
