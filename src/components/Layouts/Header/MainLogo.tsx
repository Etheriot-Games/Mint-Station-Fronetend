import { useMemo } from 'react'

import { ReactComponent as LogoSm } from 'assets/svg/logo_sm.svg'
import { MainLogoIcon } from 'components/SVGs'
import { useScreenSizeContext } from 'contexts'
import { useAppNavigate } from 'hooks'
import { useGetThemeReducerValues } from 'state/theme/hooks'
import { screens } from 'theme/utils'

const MainLogo = ({ isFooter }: { isFooter?: boolean }) => {
  const { screenWidth } = useScreenSizeContext()
  const activeTheme = useGetThemeReducerValues('activeTheme')
  const { handleNavigate } = useAppNavigate()

  const isSmallScreen = useMemo(() => screenWidth < screens.sm, [screenWidth])

  return (
    <div className="cursor-pointer z-30" onClick={() => handleNavigate('/')}>
      {!isFooter && isSmallScreen ? (
        <LogoSm className="fill-white dark:fill-black h-8 xs:h-10 w-auto" />
      ) : (
        <MainLogoIcon
          className={`${isFooter ? 'h-8 md:h-11' : 'h-10 md:h-[60px]'} w-auto`}
          fill={activeTheme === 'dark' ? '#000000' : '#FFFFFF'}
          stroke={activeTheme === 'dark' ? '#000000' : '#FFFFFF'}
        />
      )}
    </div>
  )
}

export default MainLogo
