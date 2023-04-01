import { useCallback } from 'react'

import { useGetPathFindersContract, useWeb3 } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setBalancePerPhase, setPathFindersVariables } from 'state/web3/reducer'
import { convertBigNumToNormal, executeSingleReadContract } from 'utils'

import { MintPhase } from '../types'

export const useFetchPathFindersVariables = () => {
  const dispatch = useAppDispatch()

  const contract = useGetPathFindersContract()

  const handleFetchVariables = useCallback(async () => {
    try {
      if (!contract) return

      const maxSupplyCall = executeSingleReadContract(contract, 'maxSupply', [])
      const totalSupplyCall = executeSingleReadContract(contract, 'totalSupply', [])
      const mintPhaseCall = executeSingleReadContract(contract, 'mintPhase', [])
      const mintPriceCall = executeSingleReadContract(contract, 'MINT_PRICE', [])

      const [maxSupply, totalSupply, mintPhase, mintPrice] = await Promise.all([
        maxSupplyCall,
        totalSupplyCall,
        mintPhaseCall,
        mintPriceCall,
      ])

      const maxPerWallet = await executeSingleReadContract(
        contract,
        mintPhase === MintPhase.Whitelist ? 'MAX_MINT_PER_WALLET_WL_PHASE' : 'MAX_MINT_PER_WALLET_PUBLIC_PHASE',
        []
      )

      dispatch(
        setPathFindersVariables({
          maxSupply: convertBigNumToNormal(maxSupply, false, 0),
          totalSupply: convertBigNumToNormal(totalSupply, false, 0),
          mintPhase,
          mintPrice,
          maxPerWallet: convertBigNumToNormal(maxPerWallet, false, 0),
        })
      )
    } catch (error) {
      console.log(error)
    } finally {
      // dispatch(setIsLoading(false))
    }
  }, [contract, dispatch])

  // Check totalSupply separately after mint process done
  const handleTotalSupply = useCallback(async () => {
    try {
      if (!contract) return

      const totalSupply = await executeSingleReadContract(contract, 'totalSupply', [])
      dispatch(setPathFindersVariables({ totalSupply: convertBigNumToNormal(totalSupply, false, 0) }))
    } catch (error) {
      console.log(error)
    }
  }, [contract, dispatch])

  return { handleFetchVariables, handleTotalSupply }
}

export const useFetchBalancePerPhase = () => {
  const { address } = useWeb3()
  const contract = useGetPathFindersContract()

  const dispatch = useAppDispatch()

  const handleGetBalancePerPhase = useCallback(async () => {
    try {
      if (!contract || !address) return

      const mintPhase = await executeSingleReadContract(contract, 'mintPhase', [])
      const balancePerPhase = await executeSingleReadContract(contract, 'balancePerType', [address, mintPhase])
      dispatch(setBalancePerPhase(convertBigNumToNormal(balancePerPhase, false, 0) as number))
    } catch (error) {
      console.log(error)
    }
  }, [address, contract, dispatch])

  return { handleGetBalancePerPhase }
}
