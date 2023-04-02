import { defaultNetworkMetadata, pathFindersContract, SupportedChainId } from 'config/web3'

export const OPENSEA_PREFIXES: { [chainId: number]: string } = {
  [SupportedChainId.ETHEREUM]: '',
  [SupportedChainId.GOERLI]: 'testnets.',
}

export const RARIBLE_PREFIXES: { [chainId: number]: string } = {
  [SupportedChainId.ETHEREUM]: '',
  [SupportedChainId.GOERLI]: 'testnet.',
}

export const getOpenSeaItemLink = (chainId: number, tokenId: number, contractAddress: string) => {
  return `https://${OPENSEA_PREFIXES[chainId] ?? ''}opensea.io/assets/${defaultNetworkMetadata[
    chainId
  ].chainName.toLowerCase()}/${contractAddress}/${tokenId}`
}

export const getOpenSeaCollectionLink = (chainId: number, collectionName: string) => {
  return `https://${OPENSEA_PREFIXES[chainId] ?? ''}opensea.io/collection/${collectionName}`
}

export const getRaribleCollectionLink = (chainId: number, collectionName: string) => {
  return `https://${RARIBLE_PREFIXES[chainId] ?? ''}rarible.com/collection/${pathFindersContract.addressMap[chainId]}`
}
