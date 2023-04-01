import { ReactComponent as DarkModeIcon } from 'assets/svg/dark_mode_icon.svg'
import { ReactComponent as LightModeIcon } from 'assets/svg/light_mode_icon.svg'
import { useThemeSwitcher } from 'hooks'

const ThemeMode = () => {
  const { activeTheme, setTheme } = useThemeSwitcher()

  return (
    <div className="cursor-pointer z-10" onClick={() => setTheme(activeTheme as 'dark' | 'light')}>
      {activeTheme === 'dark' ? (
        <LightModeIcon className="fill-white stroke-white w-8 h-8" />
      ) : (
        <DarkModeIcon className="fill-black w-6 h-6" />
      )}
    </div>
  )
}

export default ThemeMode
