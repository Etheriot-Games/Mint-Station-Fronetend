import { useEffect, useMemo, useRef } from 'react'

import JSConfetti from 'js-confetti'

import { ReactComponent as CheckIcon } from 'assets/svg/check_icon.svg'
import { ReactComponent as CopyIcon } from 'assets/svg/copy_icon.svg'
import COUNT_BORDER from 'assets/svg/count_border.svg'
import COUNT_BORDER_LIGHT from 'assets/svg/count_border_light.svg'
import { Button, ContractAddressWrapper, CountMinusButton, CountPlusButton, CountWrapper, HorizontalDivider } from 'components/SVGs'
import { Connectwallet } from 'components/WalletConnection'
import { DOCS_LINKS } from 'config/consts'
import { DEFAULT_CHAIN_ID, pathFindersContract } from 'config/web3'
import { useCopyToClipboard, useHandleExternalLink, useWeb3 } from 'hooks'
import { useMint, useMintAmount } from 'pages/Mint/hooks'
import { MintPhase } from 'pages/Mint/types'
import { useGetThemeReducerValues } from 'state/theme/hooks'
import { useGetWeb3ReducerValues } from 'state/web3/hooks'
import { ExplorerDataType, convertBigNumToNormal, getExplorerLink, shortenAddress, whiteListChecker } from 'utils'

const MintAmountController = () => {
  const activeTheme = useGetThemeReducerValues('activeTheme')
  const mintAmount = useGetWeb3ReducerValues('mintAmount')
  const { handleMintAmount } = useMintAmount()

  return (
    <div className="relative w-[96%] tiny:w-[354px] text-xl tiny:text-[26px] mx-2 tiny:mx-6 my-2 md:my-4 select-none">
      <img src={activeTheme === 'dark' ? COUNT_BORDER : COUNT_BORDER_LIGHT} alt="count-border" className="w-full h-auto" />
      <div className="absolute left-[10px] top-[6.5px] w-1/2 cursor-pointer" onClick={() => handleMintAmount()}>
        <CountMinusButton
          className="w-full h-auto"
          fill1="fill-secondary hover:fill-secondary-600 dark:fill-primary dark:hover:fill-primary-600"
          fill2="fill-white dark:fill-black"
        />
      </div>
      <div className="absolute right-[10px] top-[6.5px] w-1/2 cursor-pointer" onClick={() => handleMintAmount(true)}>
        <CountPlusButton
          className="w-full h-auto"
          fill1="fill-secondary hover:fill-secondary-600 dark:fill-primary dark:hover:fill-primary-600 transition duration-300"
          fill2="fill-white dark:fill-black"
        />
      </div>

      <CountWrapper
        className="absolute -top-3 left-1/2 -translate-x-1/2 h-[186%] w-auto"
        fill="fill-secondary-600 dark:fill-primary-700"
        stroke="stroke-secondary-50 dark:stroke-primary-50"
      />
      <span className="font-title text-primary-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{mintAmount}</span>
    </div>
  )
}

const ContractAddress = () => {
  const { chainId, isSupported } = useWeb3()
  const { isCopied, handleCopy } = useCopyToClipboard()

  const contractAddress = useMemo(
    () => pathFindersContract.addressMap[chainId && isSupported ? chainId : DEFAULT_CHAIN_ID],
    [chainId, isSupported]
  )

  return (
    <div className="relative">
      <ContractAddressWrapper className="" fill={'fill-secondary dark:fill-primary'} stroke={'stroke-secondary dark:stroke-primary'} />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center gap-[38px] ml-1 w-full">
        <span className="text-[14px] text-white dark:text-black">{'Contract'}</span>
        <span className="text-[10px] font-bold">{shortenAddress(contractAddress, 8)}</span>
        {isCopied ? (
          <CheckIcon className="w-3 h-3 fill-secondary dark:fill-white" />
        ) : (
          <CopyIcon
            className="w-3 h-3 fill-secondary-700 hover:fill-secondary dark:fill-white dark:hover:fill-primary-50 cursor-pointer"
            onClick={async (e) => {
              e.stopPropagation()
              await handleCopy(contractAddress)
            }}
          />
        )}
      </div>
    </div>
  )
}

const MintIfPossible = () => {
  const { address, chainId } = useWeb3()
  const { isSufficientBalanceToMint } = useMintAmount()
  const mintAmount = useGetWeb3ReducerValues('mintAmount')
  const balancePerPhase = useGetWeb3ReducerValues('balancePerPhase')
  const { maxPerWallet, mintPhase } = useGetWeb3ReducerValues('pathFindersVariables')
  const isLoading = useGetWeb3ReducerValues('isLoading')
  const { mintPrice, isSuccess, txHash, handleMint, handleConfirm } = useMint()
  const { handleOpenExternalLink } = useHandleExternalLink()
  const canvasRef = useRef(null)
  const intervalRef = useRef<any>(null)

  useEffect(() => {
    const handleAnimation = async () => {
      if (isSuccess === true) {
        try {
          const canvas = canvasRef.current
          if (canvas) {
            intervalRef.current = setInterval(async () => {
              const jsConfetti = new JSConfetti({ canvas })
              await jsConfetti.addConfetti({
                emojis: ['🎉', '🎉', '🎉', '🎉', '🎉', '🎉'],
                confettiNumber: 50,
                emojiSize: 70,
              })
              jsConfetti.clearCanvas()
            }, 2000)
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        intervalRef.current = null
      }
    }

    handleAnimation()

    return () => {
      intervalRef.current = null
    }
  }, [isSuccess])

  if (mintPhase === MintPhase.Whitelist && whiteListChecker(address!) === false)
    return (
      <div className="max-sm:w-full md:w-1/2 px-7 py-4 text-red text-center capitalize">
        {'You are not whitelisted yet. Please check your whitelist eligibility.'}
      </div>
    )

  if (!isSufficientBalanceToMint)
    return <div className="max-sm:w-full md:w-1/2 px-7 py-4 text-red text-center">{'Insufficient ETH balance to mint!'}</div>

  if (balancePerPhase + mintAmount > maxPerWallet)
    return <div className="max-sm:w-full md:w-1/2 px-7 py-4 text-red text-center">{'Max amount exceed to mint!'}</div>

  return (
    <>
      {isSuccess === false && (
        <div className="max-sm:w-full md:w-1/2 px-7 py-4 text-red text-center">{'Transaction failed to mint, Try it later again.'}</div>
      )}
      {isSuccess === true && (
        <div className="max-sm:w-full md:w-1/2 px-7 py-4 text-black dark:text-white text-center">
          <canvas className="fixed top-0 left-0 w-full h-screen" id="animation" ref={canvasRef} />
          {`Congratulations!, Your Pathfinder minted successfully Check transaction detail here `}
          <span
            className="relative font-bold text-secondary dark:text-primary underline underline-offset-4 cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
            onClick={() => handleOpenExternalLink(getExplorerLink(chainId, txHash, ExplorerDataType.TRANSACTION))}
          >
            {'Etherscan.io'}
          </span>
        </div>
      )}
      <div
        className={`relative flex items-center justify-center ${
          isLoading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform'
        }`}
        onClick={isSuccess === undefined ? handleMint : handleConfirm}
      >
        <Button className="h-14 md:h-[66px] w-auto" fill1={'fill-secondary dark:fill-primary'} fill2={'fill-secondary dark:fill-primary'} />
        <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-white dark:text-black whitespace-nowrap">
          {mintPhase === MintPhase.Paused
            ? 'Minting Soon'
            : isSuccess === undefined
            ? `Mint Now ${convertBigNumToNormal(mintPrice, true, 18, 3)} ETH`
            : 'Confirm'}
          {isLoading && (
            <svg
              className="animate-spin ml-3 h-3 w-auto md:h-5 md:w-5 text-white dark:text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </>
  )
}

const MintActionContainer = () => {
  const { address } = useWeb3()
  const { maxSupply, totalSupply } = useGetWeb3ReducerValues('pathFindersVariables')
  const { handleOpenExternalLink } = useHandleExternalLink()

  if (!address)
    return (
      <>
        <HorizontalDivider className="stroke-secondary dark:stroke-primary w-[calc(100%-34px)] h-auto ml-10 mt-20" />
        <Connectwallet isPathFinder />
      </>
    )
  if (maxSupply === totalSupply)
    return <div className="max-sm:w-full md:w-1/2 px-7 py-4 text-primary-50 text-center">{'All PathFinders minted!'}</div>

  return (
    <div className="flex flex-col w-full items-center gap-4 z-10">
      <MintAmountController />
      <ContractAddress />
      <div className="w-full flex justify-start md:justify-end mt-4">
        <HorizontalDivider className="stroke-secondary dark:stroke-primary w-3/4 md:w-[calc(100%-36px)] h-auto ml-3 md:-mr-1" />
      </div>
      <MintIfPossible />
      <span
        className="font-bold text-secondary dark:text-primary underline underline-offset-4 cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
        onClick={() => handleOpenExternalLink(DOCS_LINKS.pathfinder)}
      >
        {'Why You Need A Pathfinder ↗'}
      </span>
    </div>
  )
}

export default MintActionContainer
