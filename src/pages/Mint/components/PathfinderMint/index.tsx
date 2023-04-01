import { forwardRef } from 'react'

import BG from 'assets/images/pathfinder_bg.png'
import { HorizontalDivider, VerticalDivider } from 'components/SVGs'

import BuyOnContainer from '../BuyonContainer'

import MintActionContainer from './MintAction'
import MintInfoContainer from './MintInfo'
import WhiteListChecker from './WhiteListChecker'

// eslint-disable-next-line react/display-name
const PathFindersContainer = forwardRef((props, ref: any) => {
  return (
    <div ref={ref} className="relative w-full py-[6%] px-[4%]">
      <img src={BG} alt="pathfinder-bg" className="w-full h-auto absolute top-0 left-0 opacity-10 light:opacity-5" />
      <div className="relative w-full max-w-screen-2xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between max-md:gap-4 z-20 bg-section-border-rotate-light md:bg-section-border-light dark:bg-section-border-rotate-dark dark:md:bg-section-border-dark bg-no-repeat bg-[length:100%_100%] py-[10%] md:py-4">
        <div className="relative flex flex-col items-center w-full md:w-1/2 gap-10">
          <MintInfoContainer />
          <MintActionContainer />
        </div>
        <VerticalDivider className="stroke-secondary dark:stroke-primary max-md:hidden" />
        <div className="flex items-end w-full -scale-x-100 md:hidden">
          <HorizontalDivider className="stroke-secondary dark:stroke-primary w-3/4 h-auto ml-3 mt-4" />
        </div>

        <div className="w-full md:w-1/2 h-full">
          <WhiteListChecker />
        </div>
      </div>
      <BuyOnContainer nftType="pathfinder" />
    </div>
  )
})

export default PathFindersContainer
