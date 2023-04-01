import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useBalance, useDisconnect, useEnsName } from 'wagmi'

import WALLET_IMG from 'assets/images/wallet.png'
import { ReactComponent as CheckIcon } from 'assets/svg/check_icon.svg'
import { ReactComponent as CopyIcon } from 'assets/svg/copy_icon.svg'
import { Button } from 'components/SVGs'
import { useCopyToClipboard, useWeb3 } from 'hooks'
import { convertBigNumToNormal, shortenAddress } from 'utils'

const ConnectedStatus = () => {
  const { address, chainId, getNetworkMetadata } = useWeb3()
  const { isCopied, handleCopy } = useCopyToClipboard()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName()
  const { data: tokenBalance } = useBalance({ address, chainId, watch: true, cacheTime: 2_000 })

  if (!address || !chainId) return null

  return (
    <div className="flex flex-col items-center w-max gap-4 px-6 py-5">
      <div className="flex items-center gap-2">
        <img src={WALLET_IMG} alt="wallet" className="w-8 h-auto" />
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="text-lg-bold">{ensName ?? 'Wallet'}</span>

          <div className="flex items-center font-medium leading-[112%] text-black/80 dark:text-white/80">
            {shortenAddress(address)}
            {isCopied ? (
              <CheckIcon className="w-4 h-4 fill-secondary dark:fill-white" />
            ) : (
              <CopyIcon
                className="w-4 h-4 fill-secondary-700 hover:fill-secondary dark:fill-white dark:hover:fill-primary-50 cursor-pointer"
                onClick={async (e) => {
                  e.stopPropagation()
                  await handleCopy(address)
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end pt-[7px] pb-[3px] tracking-normal">
        <span className="text-base-bold text-secondary dark:text-primary">{`${
          tokenBalance ? convertBigNumToNormal(tokenBalance.value, true, tokenBalance.decimals, 3) : '---'
        } ${getNetworkMetadata(chainId).symbol}`}</span>
      </div>
      <div className="w-full h-px my-1 border-solid border-t border-secondary dark:border-primary" />
      <div
        className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
        onClick={() => disconnect()}
      >
        <Button className={`h-10 md:h-[52px] w-auto`} fill1={'fill-transparent'} fill2={'fill-secondary dark:fill-primary'} />
        <div
          className={`absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-secondary dark:text-primary whitespace-nowrap`}
        >
          <LogoutOutlinedIcon />

          {'Disconnect'}
        </div>
      </div>
      {/* <div
        className="flex items-center gap-[10px] h-9 px-8 group cursor-pointer border-solid border border-text2 hover:border-primary hover:text-primary hover:drop-shadow-[2px_4px_10px_rgba(0,208,255,0.32)] rounded-lg font-bold text-white/80 leading-[112%]"
        onClick={() => disconnect()}
      >
        <span>{'Disconnect'}</span>
      </div> */}
    </div>
  )
}

export default ConnectedStatus
