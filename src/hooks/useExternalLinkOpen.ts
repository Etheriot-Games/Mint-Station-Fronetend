import { useCallback } from 'react'

export const useHandleExternalLink = () => {
  const handleOpenExternalLink = useCallback((link: string, isNewTab?: boolean) => {
    window.open(link, isNewTab ? '_blank' : '')
  }, [])

  return { handleOpenExternalLink }
}
