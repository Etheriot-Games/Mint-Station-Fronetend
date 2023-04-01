import { useCallback, useEffect, useRef, useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useEnsName, useSwitchNetwork } from 'wagmi'

import BUTTON_IMG from 'assets/images/button2.png'
import PopupWrapper from 'components/PopupWrapper'
import { DEFAULT_CHAIN_ID } from 'config/web3'
import { useWeb3 } from 'hooks'
import { shortenAddress } from 'utils'

import ConnectedStatus from './ConnectedStatus'

const WalletStatus = () => {
  const { address, chainId, isSupported } = useWeb3()
  const { data: ensName } = useEnsName()
  const { switchNetwork } = useSwitchNetwork()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef(null)

  const handleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleCheckSupportedNetwork = useCallback(async () => {
    if (!isSupported && switchNetwork) {
      switchNetwork(DEFAULT_CHAIN_ID)
    }
  }, [isSupported, switchNetwork])

  useEffect(() => {
    handleCheckSupportedNetwork()
  }, [handleCheckSupportedNetwork])

  if (!address || !chainId) return null

  return (
    <>
      <div
        ref={ref}
        className="z-30 relative flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
        onClick={handleIsOpen}
      >
        <img src={BUTTON_IMG} alt="button-2" className="h-[40px] w-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 2xl:gap-4 font-bold text-[14px] 2xl:text-base-button tracking-normal text-white">
          <span>{ensName ?? shortenAddress(address)}</span>
          {isOpen ? <KeyboardArrowUpIcon fontSize="inherit" /> : <KeyboardArrowDownIcon fontSize="inherit" />}
        </div>
        <PopupWrapper
          isOpen={isOpen}
          handleIsOpen={handleIsOpen}
          parentRef={ref}
          className="top-12 max-tiny:left-0 tiny:right-0 bg-white dark:bg-primary-900 rounded-md border border-solid border-secondary dark:border-primary overflow-hidden w-max"
        >
          <ConnectedStatus />
        </PopupWrapper>
      </div>
    </>
  )
}

export default WalletStatus
