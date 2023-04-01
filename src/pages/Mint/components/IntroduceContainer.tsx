import { useCallback, useMemo } from 'react'

import PATH_FINDERS_GIF_DARK from 'assets/images/etheriot.gif'
import GIF_BORDER_DARK from 'assets/images/img_wrapper_dark.png'
import GIF_BORDER_LIGHT from 'assets/images/img_wrapper_light.png'
import { Button } from 'components/SVGs'
import { DOCS_LINKS } from 'config/consts'
import { useScreenSizeContext } from 'contexts'
import { useAppNavigate, useHandleExternalLink } from 'hooks'
import { useGetThemeReducerValues } from 'state/theme/hooks'
import { screens } from 'theme/utils'

const IntroduceContainer = ({ pathfinderRef }: { pathfinderRef: any }) => {
  const { screenWidth } = useScreenSizeContext()
  const isSmallScreen = useMemo(() => screenWidth < screens.md, [screenWidth])
  const activeTheme = useGetThemeReducerValues('activeTheme')
  const { handleOpenExternalLink } = useHandleExternalLink()
  const { handleNavigate } = useAppNavigate()

  const handleToPathfinder = useCallback(() => {
    pathfinderRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [pathfinderRef])

  return (
    <div className="flex flex-col items-center w-full h-auto px-[4%] pt-20">
      <div className="flex flex-col items-center py-16">
        <span className="font-bold text-xl xs:text-[28px] md:text-h4 text-transparent bg-clip-text bg-[url('assets/images/text_pattern.png')] bg-cover dark:text-primary leading-[160%]">
          {'Welcome To'}
        </span>
        <span className="font-bold font-title text-h2 sm:text-h1 md:text-extra text-transparent bg-clip-text bg-[url('assets/images/text_pattern.png')] bg-cover dark:text-primary text-center">
          {'ETHERIOT MINT STATION'}
        </span>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between max-md:gap-6 w-full">
        <div className="flex flex-col items-center md:items-start w-full md:w-3/5 z-10">
          <div className="flex flex-col font-title text-secondary dark:text-primary text-xl xs:text-[42px] sm:text-h1 text-center md:text-start leading-[111.5%]">
            <span className="">{'Pathfinder'}</span>
            <span className="">{'Genesis'}</span>
            <span className="">{'Mint now live'}</span>
          </div>
          <span className="text-base xl:text-lg leading-[160%] text-black dark:text-white/60 text-center md:text-start sm:whitespace-pre-line capitalize mt-[22px] mb-[34px]">
            {
              'Pathfinders are official genesis NFT of galaxarian odyssey Game a 32\nperson pvP battle royale. Genesis Mint allows you to pick up weapons,\nEarn $HCASH and loads of other benefits'
            }
          </span>
          <div className="flex items-center gap-2 tiny:gap-4 xs:gap-12">
            <div
              className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
              onClick={handleToPathfinder}
            >
              <Button
                className="h-10 md:h-[52px] w-auto"
                fill1={'fill-secondary dark:fill-primary'}
                fill2={'fill-secondary dark:fill-primary'}
              />
              <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-white dark:text-black whitespace-nowrap">
                {'Mint Now ↓'}
              </div>
            </div>
            <div
              className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
              onClick={() => handleOpenExternalLink(DOCS_LINKS.pathfinder)}
            >
              <Button className="h-10 md:h-[52px] w-auto" fill1={'fill-transparent'} fill2={'fill-secondary dark:fill-primary'} />
              <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-secondary dark:text-primary whitespace-nowrap">
                {'Learn More'}
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] overflow-hidden z-0">
          <img
            src={activeTheme === 'dark' ? GIF_BORDER_DARK : GIF_BORDER_LIGHT}
            alt=""
            className=" w-[320px] h-[320px] sm:w-[480px] sm:h-[480px]"
          />
          <img
            src={PATH_FINDERS_GIF_DARK}
            alt=""
            className="absolute top-1/2 left-[calc(50%-2px)] -translate-x-1/2 -translate-y-1/2 object-cover w-[284px] h-[289px] sm:w-[424px] sm:h-[436px]"
            style={{ clipPath: 'polygon(0% 0%, 91% 0%, 100% 9%, 100% 100%, 100% 100%, 13.5% 100%, 0% 87%, 0% 20%)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default IntroduceContainer
