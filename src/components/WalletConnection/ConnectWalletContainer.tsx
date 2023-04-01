import { useCallback, useRef, useState } from 'react'

import PopupWrapper from 'components/PopupWrapper'
import { Button } from 'components/SVGs'

import WalletListContainer from './WalletListContainer'

const ConnectWalletContainer = ({ isPathFinder }: { isPathFinder?: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef(null)

  const handleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className="z-30 relative" ref={ref}>
      <div
        className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
        onClick={handleIsOpen}
      >
        <Button
          className={`h-10 ${isPathFinder ? 'md:h-[66px]' : 'md:h-[52px]'} w-auto`}
          fill1={isPathFinder ? 'fill-secondary dark:fill-primary' : 'fill-primary dark:fill-black'}
          fill2={isPathFinder ? 'fill-secondary dark:fill-primary' : 'fill-primary dark:fill-black'}
        />
        <div
          className={`absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button ${
            isPathFinder ? 'text-white dark:text-black' : 'text-secondary dark:text-primary'
          } whitespace-nowrap`}
        >
          {'Connect Wallet'}
        </div>
      </div>

      <PopupWrapper
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
        parentRef={ref}
        className={`${
          isPathFinder ? 'top-[70px]' : 'top-[56px]'
        } max-tiny:left-0 tiny:right-0 w-max p-2 bg-white dark:bg-primary-900 rounded-md border border-solid border-secondary dark:border-primary`}
      >
        <WalletListContainer />
      </PopupWrapper>
    </div>
  )
}

export default ConnectWalletContainer
