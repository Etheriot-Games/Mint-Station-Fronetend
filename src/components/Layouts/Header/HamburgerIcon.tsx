import { ReactComponent as BorderLine } from 'assets/svg/border_dash.svg'
import { ROUTE_PATH } from 'config/routes/routePath'
import { useGetCurrentURLPath, useHandleRoute } from 'hooks'

import SocialIconsWrapper from './SocialIconsWrapper'

const MenuItem = ({ route }: { route: string }) => {
  const path = useGetCurrentURLPath()
  const { handleRoutes } = useHandleRoute()

  return (
    <div
      className={`cursor-pointer w-fit font-title text-white dark:text-black hover:text-primary dark:hover:text-secondary text-h3 text-end leading-none transition-colors duration-300 ease-in-out`}
      onClick={() => handleRoutes(route)}
    >
      {`${route} ${ROUTE_PATH[route].isExternal && '↗'}`}
    </div>
  )
}

const MobileMenu = () => {
  return (
    <div className="fixed top-0 right-0 flex flex-col items-end w-full h-screen bg-secondary dark:bg-primary px-6 pt-32 gap-6">
      {Object.keys(ROUTE_PATH).map((route) => (
        <MenuItem key={route} route={route} />
      ))}
      <BorderLine className="fill-primary dark:fill-black mt-10 w-full" />
      <SocialIconsWrapper />
    </div>
  )
}

const HamburgerIcon = ({ isShow, handleShow }: { isShow: boolean; handleShow: () => void }) => {
  const iconClassName = `h-[1px] w-4 my-0.5 rounded-full bg-white dark:bg-black transition ease-in duration-300`

  return (
    <div className="relative text-white" onClick={handleShow}>
      {isShow && <MobileMenu />}

      <div className="flex flex-col">
        <div className={`${iconClassName} ${isShow && 'rotate-45 translate-y-1.5'}`} />
        <div className={`${iconClassName} ${isShow && '!opacity-0'}`} />
        <div className={`${iconClassName} ${isShow && '-rotate-45 -translate-y-1'}`} />
      </div>
    </div>
  )
}

export default HamburgerIcon
