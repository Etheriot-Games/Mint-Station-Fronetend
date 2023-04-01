import HCOIN_IMG_DARK from 'assets/images/coin_img_dark.png'
import HCOIN_IMG_LIGHT from 'assets/images/coin_img_light.png'
import { Button, HorizontalDivider, InfoBGRightCorner } from 'components/SVGs'
import { DOCS_LINKS } from 'config/consts'
import { useHandleExternalLink } from 'hooks'
import { useGetThemeReducerValues } from 'state/theme/hooks'

const HCashContainer = () => {
  const activeTheme = useGetThemeReducerValues('activeTheme')
  const { handleOpenExternalLink } = useHandleExternalLink()

  return (
    <div className="relative w-full p-[4%]">
      <div className="relative w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center gap-10 z-20 bg-section-border-rotate-light md:bg-section-border-light dark:bg-section-border-rotate-dark dark:md:bg-section-border-dark bg-no-repeat bg-[length:100%_100%] px-10 py-[10%] md:py-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap md:flex-nowrap w-full">
          <div className="flex flex-col items-center md:items-start gap-10">
            <span className="font-title text-h2 text-secondary dark:text-primary leading-[111.5%] text-center">{'BUY $HCASH'}</span>
            <span className="text-base xl:text-lg leading-[160%] text-black dark:text-white/60 text-center md:text-start whitespace-pre-line capitalize">
              {
                "$HCASH is the ERC-20 in-game currency that powers Etheriot Games' ecosystem, governance, and play-to-earn mechanism. It enables users to seamlessly buy and sell in-game assets, participate in governance decisions, and earn rewards through gameplay. $HCASH is based on the secure and transparent Ethereum blockchain. The play-to-earn mechanism incentivizes gameplay and rewards users with $HCASH, creating a more engaging and rewarding gaming experience while offering an avenue to earn money."
              }
            </span>
            <div className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform">
              <Button
                className="h-12 md:h-[66px] w-auto"
                fill1={'fill-secondary dark:fill-primary'}
                fill2={'fill-secondary dark:fill-primary'}
              />
              <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-white dark:text-black whitespace-nowrap">
                {'I.D.O Coming Soon'}
              </div>
            </div>
            <span
              className="font-bold text-secondary dark:text-primary underline underline-offset-4 cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
              onClick={() => handleOpenExternalLink(DOCS_LINKS.hcash)}
            >
              {'Learn More About $HCASH ↗'}
            </span>
          </div>
          <img src={activeTheme === 'dark' ? HCOIN_IMG_DARK : HCOIN_IMG_LIGHT} alt="hcash" className="w-full xs:w-3/5 md:w-1/2 h-auto" />
        </div>
        <div className="flex justify-end w-full -mr-16">
          <HorizontalDivider className="stroke-secondary dark:stroke-primary -scale-x-100 w-full xl:w-[90%] h-auto" />
        </div>
        <div className="flex items-center justify-center max-md:flex-wrap gap-6 xs:gap-10 2xl:gap-24 w-full py-6 md:py-10 text-white dark:text-black text-sm-bold xs:text-base-button whitespace-nowrap">
          <div className="relative w-fit">
            <InfoBGRightCorner className="w-auto h-7 md:h-8 lg:h-9 fill-secondary dark:fill-primary" />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{`Total Supply: 1bn`}</span>
          </div>
          <div className="relative w-fit">
            <InfoBGRightCorner className="w-auto h-7 md:h-8 lg:h-9 fill-secondary dark:fill-primary" />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">{`Pre Sale Price: TBA`}</span>
          </div>
          <div className="relative w-fit">
            <InfoBGRightCorner className="w-auto h-7 md:h-8 lg:h-9 fill-secondary dark:fill-primary" />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">{`Pre Sale Date: TBA`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HCashContainer
