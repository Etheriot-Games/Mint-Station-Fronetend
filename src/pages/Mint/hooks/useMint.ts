import { useCallback, useMemo, useState } from 'react'

import { Zero } from '@ethersproject/constants'
import { BigNumber } from 'ethers'
import { useBalance } from 'wagmi'

import { WHITE_LIST_PROOF_LIST } from 'config/web3'
import { useGetPathFindersContract, useWeb3 } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { useGetWeb3ReducerValues } from 'state/web3/hooks'
import { setIsLoading, setMintAmount } from 'state/web3/reducer'
import { convertToBigNumber, estimateGas, executeMint } from 'utils'

import { MintPhase } from '../types'

import { useFetchBalancePerPhase, useFetchPathFindersVariables } from './useFetchPathFindersVariables'

export const useMintAmount = () => {
  const { address, chainId } = useWeb3()
  const { data: tokenBalance } = useBalance({ address, chainId, watch: true, cacheTime: 2_000 })

  const { mintPhase, mintPrice, maxPerWallet } = useGetWeb3ReducerValues('pathFindersVariables')
  const mintAmount = useGetWeb3ReducerValues('mintAmount')
  const balancePerPhase = useGetWeb3ReducerValues('balancePerPhase')

  const value = useMemo(() => BigNumber.from(mintPrice).mul(convertToBigNumber(mintAmount.toString(), 0)), [mintAmount, mintPrice])
  const isSufficientBalanceToMint = useMemo(() => tokenBalance && tokenBalance.value.sub(value).gt(Zero), [value, tokenBalance])

  const dispatch = useAppDispatch()

  const handleMintAmount = useCallback(
    (isIncrease?: boolean) => {
      try {
        if (mintPhase === MintPhase.Paused) return

        if (isIncrease) {
          if (balancePerPhase + mintAmount === maxPerWallet) return
          if (!isSufficientBalanceToMint) return

          dispatch(setMintAmount(mintAmount + 1))
        } else {
          if (mintAmount === 1) return
          dispatch(setMintAmount(mintAmount - 1))
        }
      } catch (error) {
        console.log(error)
      }
    },
    [balancePerPhase, dispatch, isSufficientBalanceToMint, maxPerWallet, mintAmount, mintPhase]
  )

  return { isSufficientBalanceToMint, handleMintAmount }
}

export const useMint = () => {
  const { address } = useWeb3()
  const { handleTotalSupply } = useFetchPathFindersVariables()
  const { handleGetBalancePerPhase } = useFetchBalancePerPhase()

  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined)
  const [txHash, setTxHash] = useState<string>('')

  const dispatch = useAppDispatch()

  const isLoading = useGetWeb3ReducerValues('isLoading')
  const mintAmount = useGetWeb3ReducerValues('mintAmount')
  const balancePerPhase = useGetWeb3ReducerValues('balancePerPhase')
  const { maxSupply, totalSupply, mintPrice, mintPhase, maxPerWallet } = useGetWeb3ReducerValues('pathFindersVariables')

  const contract = useGetPathFindersContract(true, false)

  const value = useMemo(() => BigNumber.from(mintPrice).mul(convertToBigNumber(mintAmount.toString(), 0)), [mintAmount, mintPrice])

  const handleMint = useCallback(async () => {
    try {
      if (isLoading || !contract || !address) return
      if (balancePerPhase + mintAmount > maxPerWallet) return
      if (totalSupply + mintAmount > maxSupply) return
      if (mintPhase === MintPhase.Paused) return

      dispatch(setIsLoading(true))
      // update below code with real whitelist api
      const proof = address ? WHITE_LIST_PROOF_LIST[address] : []

      const methodArgs = mintPhase === MintPhase.Whitelist ? [mintAmount, proof] : [mintAmount]

      const gasLimit = await estimateGas(contract, mintPhase === MintPhase.Whitelist ? 'whitelistMint' : 'mint', [...methodArgs, { value }])

      const { status, transactionHash } = await executeMint(contract, mintPhase === MintPhase.Whitelist ? 'whitelistMint' : 'mint', [
        ...methodArgs,
        { value, gasLimit },
      ])
      if (status) {
        handleTotalSupply()
        handleGetBalancePerPhase()
        dispatch(setMintAmount(1))

        setIsSuccess(true)
        setTxHash(transactionHash)
      } else setIsSuccess(false)
      dispatch(setIsLoading(false))
    } catch (error) {
      console.log(error)
      dispatch(setIsLoading(false))
    }
  }, [
    address,
    balancePerPhase,
    contract,
    dispatch,
    handleGetBalancePerPhase,
    handleTotalSupply,
    isLoading,
    maxPerWallet,
    maxSupply,
    mintAmount,
    mintPhase,
    totalSupply,
    value,
  ])

  const handleConfirm = useCallback(() => {
    setIsSuccess(undefined)
  }, [])

  return { mintPrice: value, isSuccess, txHash, handleMint, handleConfirm }
}
