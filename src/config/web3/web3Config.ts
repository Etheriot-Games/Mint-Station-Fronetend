import { configureChains, createClient, Chain, Connector } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

import ETHEREUM_ICON from 'assets/svg/ethereum_icon.svg'
import METAMASK_ICON from 'assets/svg/metamask_icon.svg'
import WALLET_CONNECT_ICON from 'assets/svg/walletconnect_icon.svg'

export enum SupportedChainId {
  ETHEREUM = mainnet.id,
  GOERLI = goerli.id,
}

export interface NetworkMetadata {
  chainName: string
  symbol: string
  isTestnet: boolean
  chainId: SupportedChainId
  icon: string
  blockExplorers: { name: string; url: string }
}

export const DEFAULT_CHAIN_ID = process.env.REACT_APP_ENV === 'prod' ? SupportedChainId.ETHEREUM : SupportedChainId.GOERLI

export const supportedChains: { [key in SupportedChainId]: Chain } = {
  [SupportedChainId.ETHEREUM]: mainnet,
  [SupportedChainId.GOERLI]: goerli,
}

export enum ConnectorNames {
  Metamask = 'metaMask',
  WalletConnect = 'walletConnect',
}

export const connectorIcons: Record<ConnectorNames, string> = {
  [ConnectorNames.Metamask]: METAMASK_ICON,
  [ConnectorNames.WalletConnect]: WALLET_CONNECT_ICON,
}

export const defaultNetworkMetadata: Record<SupportedChainId, NetworkMetadata> = {
  [SupportedChainId.ETHEREUM]: {
    chainName: 'Ethereum',
    symbol: 'ETH',
    isTestnet: false,
    chainId: SupportedChainId.ETHEREUM,
    icon: ETHEREUM_ICON,
    blockExplorers: mainnet.blockExplorers.default,
  },
  [SupportedChainId.GOERLI]: {
    chainName: 'Goerli',
    symbol: 'ETH',
    isTestnet: true,
    chainId: SupportedChainId.GOERLI,
    icon: ETHEREUM_ICON,
    blockExplorers: goerli.blockExplorers.default,
  },
}

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY

export const rpcUrlMap: Record<SupportedChainId, string> = {
  [SupportedChainId.ETHEREUM]: `${mainnet.rpcUrls.infura.http}/${INFURA_KEY}`,
  [SupportedChainId.GOERLI]: `${goerli.rpcUrls.infura.http}/${INFURA_KEY}`,
}

export const { chains, provider } = configureChains(
  [supportedChains[SupportedChainId.ETHEREUM], supportedChains[SupportedChainId.GOERLI]],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: rpcUrlMap[chain.id],
      }),
    }),
    infuraProvider({ apiKey: INFURA_KEY || '' }),
  ]
)

const metamaskConnector = new MetaMaskConnector({ chains, options: { shimChainChangedDisconnect: true, shimDisconnect: false } })

const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    rpc: rpcUrlMap,
    qrcode: true,
  },
})

export const connectorsByName: Record<ConnectorNames, Connector> = {
  [ConnectorNames.Metamask]: metamaskConnector,
  [ConnectorNames.WalletConnect]: walletConnectConnector,
}

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [metamaskConnector, walletConnectConnector],
  provider,
})
