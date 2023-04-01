import { Button } from 'components/SVGs'
import { SOCIAL_URLS } from 'config/consts'
import { pathFindersContract } from 'config/web3'
import { useHandleExternalLink, useWeb3 } from 'hooks'
import { useGetWeb3ReducerValues } from 'state/web3/hooks'
import { ExplorerDataType, getExplorerLink } from 'utils'

import { useWhiteListChecker } from '../../hooks'

const WhiteListChecker = () => {
  const { mintPhase } = useGetWeb3ReducerValues('pathFindersVariables')
  const { value, proof, isConfirm, handleOnChange, handleCheckWhiteList, handleConfirm } = useWhiteListChecker()
  const { handleOpenExternalLink } = useHandleExternalLink()
  const { chainId } = useWeb3()

  return (
    <div className={`flex flex-col items-center md:items-end gap-10 w-full px-6`}>
      <div className="w-full text-center md:text-end font-title text-h4 tiny:text-h3 xs:text-h2 text-secondary dark:text-primary whitespace-pre-line leading-[111.5%]">
        {'CHECK WHITELIST\nELIGIBILITY'}
      </div>
      <div className="flex flex-col items-start md:items-end gap-2 w-[96%] tiny:w-5/6 xs:w-4/5">
        <span className="font-medium">{'Enter Wallet Address'}</span>
        <div className="bg-input-wrapper-light dark:bg-input-wrapper-dark bg-[length:100%_100%] w-full">
          <input
            className="outline-none bg-transparent px-2 sm:px-6 py-2 w-full"
            placeholder="Put your wallet address"
            value={value}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>
      <div
        className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
        onClick={handleCheckWhiteList}
      >
        <Button className="h-14 md:h-[66px] w-auto" fill1={'fill-transparent'} fill2={'fill-secondary dark:fill-primary'} />
        <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-secondary dark:text-primary whitespace-nowrap">
          {'Check Eligibility'}
        </div>
      </div>
      {isConfirm && (
        <div className="flex flex-col w-4/5 gap-4">
          {proof === false ? (
            <span className="capitalize">
              {'Your address is not whitelisted yet. Feel free to visit our discord server'}&nbsp;
              <span
                className="text-secondary dark:text-primary cursor-pointer underline underline-offset-4"
                onClick={() => handleOpenExternalLink(SOCIAL_URLS.discord)}
              >
                {`#how-to-wl`}
              </span>
              &nbsp;{'channel to embark on the journey to become a Vanguard.'}
            </span>
          ) : (
            <>
              <span>
                {'Your address is whitelisted. Feel free to use the merkle proof provided below to mint directly from our contract on'}
                &nbsp;
                <span
                  className="text-secondary dark:text-primary cursor-pointer underline underline-offset-4 hover:scale-105 transition-all duration-300 will-change-transform"
                  onClick={() =>
                    handleOpenExternalLink(
                      getExplorerLink(chainId, `${pathFindersContract.addressMap[chainId]}#writeContract#F16`, ExplorerDataType.ADDRESS)
                    )
                  }
                >
                  {'Etherscan.io.'}
                </span>
              </span>
              <span className="break-all">{proof}</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default WhiteListChecker
