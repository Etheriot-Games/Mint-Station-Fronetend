import { InfoBGLeftCorner, InfoBGRightCorner } from 'components/SVGs'
import { MintPhase } from 'pages/Mint/types'
import { useGetWeb3ReducerValues } from 'state/web3/hooks'
import { convertBigNumToNormal } from 'utils'

const MintInfoContainer = () => {
  const { totalSupply, maxSupply, mintPhase, mintPrice, maxPerWallet } = useGetWeb3ReducerValues('pathFindersVariables')
  const balancePerPhase = useGetWeb3ReducerValues('balancePerPhase')

  return (
    <div className="flex flex-col gap-4 sm:gap-8 px-2 tiny:px-6 text-sm-bold tiny:text-sm-button xs:text-base-button text-white dark:text-black">
      <div className="flex items-center w-full gap-2 sm:gap-6">
        <div className="relative w-full">
          <InfoBGLeftCorner className="w-full h-auto min-h-[28px] fill-secondary dark:fill-primary" />
          <span className="absolute top-1/2 left-2 tiny:left-4 -translate-y-1/2">{`Mint Round:  ${MintPhase[mintPhase]}`}</span>
        </div>
        <div className="relative w-full">
          <InfoBGRightCorner className="w-full h-auto min-h-[28px] fill-secondary dark:fill-primary" />
          <span className="absolute top-1/2 right-2 tiny:right-4 -translate-y-1/2">{`Price:  ${convertBigNumToNormal(
            mintPrice,
            true,
            18,
            3
          )} ETH`}</span>
        </div>
      </div>
      <div className="flex items-center w-full gap-2 sm:gap-6">
        <div className="relative w-full">
          <InfoBGLeftCorner className="w-full h-auto min-h-[28px] fill-secondary dark:fill-primary -scale-y-100" />
          <span className="absolute top-1/2 left-2 tiny:left-4 -translate-y-1/2">{`Mints Left: ${balancePerPhase} / ${maxPerWallet}`}</span>
        </div>
        <div className="relative w-full">
          <InfoBGRightCorner className="w-full h-auto min-h-[28px] fill-secondary dark:fill-primary -scale-y-100" />
          <span className="absolute top-1/2 right-2 tiny:right-4 -translate-y-1/2">{`Supply: ${totalSupply.toLocaleString()} / ${maxSupply.toLocaleString()}`}</span>
        </div>
      </div>
    </div>
  )
}

export default MintInfoContainer
