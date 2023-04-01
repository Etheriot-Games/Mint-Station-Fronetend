import { useEffect, useRef } from 'react'

import { BattlePassContainer, BuyHCashContainer, IntroduceContainer, PathFindersContainer } from './components'
import { useFetchBalancePerPhase, useFetchPathFindersVariables } from './hooks'

const MintContainer = () => {
  const { handleFetchVariables } = useFetchPathFindersVariables()
  const { handleGetBalancePerPhase } = useFetchBalancePerPhase()
  const pathfinderRef = useRef(null)

  useEffect(() => {
    handleFetchVariables()
    handleGetBalancePerPhase()
  }, [handleFetchVariables, handleGetBalancePerPhase])

  return (
    <div className="flex flex-col items-center w-full z-0">
      <IntroduceContainer pathfinderRef={pathfinderRef} />
      <PathFindersContainer ref={pathfinderRef} />
      <BattlePassContainer />
      <BuyHCashContainer />
    </div>
  )
}

export default MintContainer
