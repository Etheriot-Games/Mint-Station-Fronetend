import { Button } from 'components/SVGs'
import { DOCS_LINKS, ROUTE_LINKS } from 'config/consts'
import { useHandleExternalLink } from 'hooks'

import MainLogo from '../Header/MainLogo'
import SocialIconsWrapper from '../Header/SocialIconsWrapper'

const Footer = () => {
  const year = new Date().getFullYear()
  const { handleOpenExternalLink } = useHandleExternalLink()

  return (
    <div className="max-md:bg-secondary dark:max-md:bg-primary md:bg-footer-light md:dark:bg-footer-dark bg-[length:100%_100%] flex max-md:flex-col items-start md:items-end justify-between gap-5 px-[4%] md:px-4 lg:px-[4%] pt-12 pb-3">
      <div className="flex flex-col gap-6 md:gap-2">
        <MainLogo isFooter />
        <span className="hidden md:block whitespace-pre-line capitalize font-bold text-[10px] text-white dark:text-black leading-[111.5%]">{`Copyright ${year} Etheriot games. Other brands or product names are\nthe trademarks of their respective owners. All rights reserved.`}</span>
      </div>

      <div className="flex flex-col items-start md:items-end gap-5 md:py-10">
        <div
          className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 will-change-transform"
          onClick={() => handleOpenExternalLink(ROUTE_LINKS.play)}
        >
          <Button className="h-10 md:h-[52px] w-auto" fill1={'fill-white dark:fill-black'} fill2={'fill-white dark:fill-black'} />
          <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-button md:text-lg-button text-secondary dark:text-primary whitespace-nowrap">
            {'Play Game'}
          </div>
        </div>
        <div className="flex items-center gap-4 h-4 font-bold text-white dark:text-black transition-colors duration-300">
          <span
            className="cursor-pointer hover:text-primary dark:hover:text-secondary border-solid"
            onClick={() => handleOpenExternalLink(DOCS_LINKS.privacy)}
          >
            {'Privacy Policy'}
          </span>
          <div className="w-[2px] h-full bg-white dark:bg-black" />
          <span
            className="cursor-pointer hover:text-primary dark:hover:text-secondary border-solid"
            onClick={() => handleOpenExternalLink(DOCS_LINKS.termsOfUse)}
          >
            {'Terms Of Use'}
          </span>
        </div>
        <SocialIconsWrapper />
      </div>
      <div className="flex md:hidden items-end justify-between w-full ">
        <span className="whitespace-pre-line capitalize font-bold text-[10px] text-white dark:text-black leading-[111.5%]">{`Copyright ${year} Etheriot games. Other brands or product names are\nthe trademarks of their respective owners. All rights reserved.`}</span>
      </div>
    </div>
  )
}

export default Footer
