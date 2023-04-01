import { useEffect, useState, useMemo } from 'react'

import { useAppDispatch } from 'state/hooks'
import { setActiveTheme } from 'state/theme/reducer'

export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(localStorage.theme ?? 'dark')
  const activeTheme = useMemo(() => (theme === 'light' ? 'dark' : 'light'), [theme])
  const dispatch = useAppDispatch()

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(activeTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
    dispatch(setActiveTheme(theme))
  }, [dispatch, theme, activeTheme])

  return { activeTheme, setTheme }
}
