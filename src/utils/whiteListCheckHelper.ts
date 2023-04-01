import { WHITE_LIST_PROOF_LIST } from 'config/web3'

export const whiteListChecker = (address: string) => {
  const proof = WHITE_LIST_PROOF_LIST[address]

  if (proof && proof.length > 0) return proof.join(', ')
  else return false
}
