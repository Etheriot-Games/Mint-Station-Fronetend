import { defaultNetworkMetadata, SupportedChainId } from 'config/web3'

export const OPENSEA_PREFIXES: { [chainId: number]: string } = {
  [SupportedChainId.ETHEREUM]: '',
  [SupportedChainId.GOERLI]: 'testnets.',
}

export const getOpenSeaItemLink = (chainId: number, tokenId: number, contractAddress: string) => {
  return `https://${OPENSEA_PREFIXES[chainId] ?? ''}opensea.io/assets/${defaultNetworkMetadata[
    chainId
  ].chainName.toLowerCase()}/${contractAddress}/${tokenId}`
}

export const getOpenSeaCollectionLink = (chainId: number, collectionName: string) => {
  return `https://${OPENSEA_PREFIXES[chainId] ?? ''}opensea.io/collection/${collectionName}`
}
