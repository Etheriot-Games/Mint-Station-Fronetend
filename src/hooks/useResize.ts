import { useCallback, useLayoutEffect, useRef } from 'react'

import { useScreenSizeContext } from 'contexts'

export const useResize = () => {
  const { setScreenWidth } = useScreenSizeContext()
  const timerDebounceRef = useRef<any>()

  const handleResize = useCallback(() => {
    if (timerDebounceRef.current) clearTimeout(timerDebounceRef.current)

    timerDebounceRef.current = setTimeout(() => {
      setScreenWidth(window.innerWidth)
    }, 500)
  }, [setScreenWidth])

  useLayoutEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
}
