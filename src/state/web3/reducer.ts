import { createSlice } from '@reduxjs/toolkit'
import { BigNumber } from 'ethers'

import { MintPhase } from 'pages/Mint/types'
import { convertToBigNumber } from 'utils'

export interface IState {
  isLoading: boolean
  pathFindersVariables: {
    maxSupply: number
    totalSupply: number
    mintPhase: MintPhase
    mintPrice: BigNumber
    maxPerWallet: number
  }
  balancePerPhase: number
  mintAmount: number
}

export const initialState: IState = {
  isLoading: false,
  pathFindersVariables: {
    maxSupply: 5555,
    totalSupply: 0,
    mintPhase: MintPhase.Paused,
    mintPrice: convertToBigNumber('0.009'),
    maxPerWallet: 5,
  },
  balancePerPhase: 0,
  mintAmount: 1,
}

const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setPathFindersVariables(state, action) {
      state.pathFindersVariables = { ...state.pathFindersVariables, ...action.payload }
    },
    setBalancePerPhase(state, action) {
      state.balancePerPhase = action.payload
    },
    setMintAmount(state, action) {
      state.mintAmount = action.payload
    },
  },
})

export const { setIsLoading, setPathFindersVariables, setMintAmount, setBalancePerPhase } = web3Slice.actions
export default web3Slice.reducer
