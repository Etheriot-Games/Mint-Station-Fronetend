import { getAddress } from '@ethersproject/address'

export function shortenString(str: string, subStr?: number, extraShort?: boolean) {
  return `${str.substring(0, extraShort ? 2 : subStr ?? 6)}...${str.substring(str.length - (extraShort ? 3 : subStr ?? 4))}`
}

export function shortenAddress(address: string, subStr?: number, extraShort?: boolean): string {
  try {
    const formattedAddress = getAddress(address)
    return shortenString(formattedAddress, subStr, extraShort)
  } catch {
    return address
  }
}

export function shortenIfAddress(address?: string | null | false, subStr?: number, extraShort?: boolean): string {
  if (typeof address === 'string' && address.length > 0) {
    return shortenAddress(address, subStr, extraShort)
  }
  return address || ''
}
