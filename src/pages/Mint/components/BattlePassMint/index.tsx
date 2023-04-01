import BG_DARK from 'assets/images/battle_pass_bg_dark.png'
import BG_LIGHT from 'assets/images/battle_pass_bg_light.png'
import BATTLE_PASS_IMG_DARK from 'assets/images/battle_pass_img.png'
import BATTLE_PASS_IMG_LIGHT from 'assets/images/battle_pass_img_light.png'
import { Button, HorizontalDivider } from 'components/SVGs'
import { DOCS_LINKS } from 'config/consts'
import { useHandleExternalLink } from 'hooks'
import { useGetThemeReducerValues } from 'state/theme/hooks'

import MintInfo from './MintInfo'

const BattlePassContainer = () => {
  const activeTheme = useGetThemeReducerValues('activeTheme')
  const { handleOpenExternalLink } = useHandleExternalLink()

  return (
    <div className="relative w-full p-[4%]">
      <img
        src={activeTheme === 'dark' ? BG_DARK : BG_LIGHT}
        alt="pathfinder-bg"
        className="w-full h-auto md:h-screen absolute top-0 left-0 opacity-25 dark:opacity-25"
      />
      <div className="relative w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center max-md:gap-4 z-20 bg-section-border-rotate-light md:bg-section-border-light dark:bg-section-border-rotate-dark dark:md:bg-section-border-dark bg-no-repeat bg-[length:100%_100%] px-10 py-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap md:flex-nowrap w-full">
          <img
            src={activeTheme === 'dark' ? BATTLE_PASS_IMG_DARK : BATTLE_PASS_IMG_LIGHT}
            alt="battle-pass"
            className="w-full xs:w-3/5 md:w-1/2 h-auto"
          />
          <div className="flex flex-col items-center gap-10">
            <span className="font-title text-h4 tiny:text-h3 xs:text-h2 text-secondary dark:text-primary leading-[111.5%] text-center whitespace-pre-line">
              {'EARN EVEN MORE WITH\nBATTLE PASS'}
            </span>
            <div className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform mt-10">
              <Button
                className="h-12 md:h-[66px] w-auto"
                fill1={'fill-secondary dark:fill-primary'}
                fill2={'fill-secondary dark:fill-primary'}
              />
              <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-white dark:text-black whitespace-nowrap">
                {'Minting Soon!'}
              </div>
            </div>
            <span
              className="font-bold text-secondary dark:text-primary underline underline-offset-4 cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
              onClick={() => handleOpenExternalLink(DOCS_LINKS.battlepass)}
            >
              {'What is Battle Pass ↗'}
            </span>
          </div>
        </div>
        <div className="flex justify-end w-full -mr-16">
          <HorizontalDivider className="stroke-secondary dark:stroke-primary -scale-x-100 w-full xl:w-[90%] h-auto" />
        </div>
        <MintInfo />
      </div>
      {/* <BuyOnContainer nftType="battlepass" /> */}
    </div>
  )
}

export default BattlePassContainer
