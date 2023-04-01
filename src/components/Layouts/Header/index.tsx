import { useCallback, useMemo, useState } from 'react'

import BG_DARK from 'assets/images/header_bg_dark.png'
import BG_LIGHT from 'assets/images/header_bg_light.png'
import { Connectwallet } from 'components/WalletConnection'
import WalletStatus from 'components/WalletConnection/WalletStatus'
import { useScreenSizeContext } from 'contexts'
import { useWeb3 } from 'hooks'
import { useGetThemeReducerValues } from 'state/theme/hooks'
import { screens } from 'theme/utils'

import HamburgerIcon from './HamburgerIcon'
import MainLogo from './MainLogo'
import Menu from './Menu'
import ThemeMode from './ThemeMode'

const Header = () => {
  const { screenWidth } = useScreenSizeContext()
  const activeTheme = useGetThemeReducerValues('activeTheme')

  const [isShow, setIsShow] = useState<boolean>(false)
  const isSmallScreen = useMemo(() => screenWidth < screens.md, [screenWidth])
  const { address, chainId } = useWeb3()

  const handleShow = useCallback(() => {
    setIsShow((prev) => !prev)
  }, [])

  return (
    <div className={`fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 sm:h-20 px-[4%]`}>
      <img src={activeTheme === 'dark' ? BG_DARK : BG_LIGHT} alt="header-bg" className="absolute top-0 left-0 w-full h-16 sm:h-20" />
      <MainLogo />
      <div className="flex justify-end items-center w-full gap-2 tiny:gap-6 2xl:gap-12">
        {!isSmallScreen && <Menu />}
        <div className="flex items-center justify-end">{address && chainId ? <WalletStatus /> : <Connectwallet />}</div>
        {isSmallScreen && <HamburgerIcon isShow={isShow} handleShow={handleShow} />}
        <ThemeMode />
      </div>
    </div>
  )
}

export default Header
