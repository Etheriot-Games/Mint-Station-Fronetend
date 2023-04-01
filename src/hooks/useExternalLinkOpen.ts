import { useCallback } from 'react'

export const useHandleExternalLink = () => {
  const handleOpenExternalLink = useCallback((link: string, isNewTab?: boolean) => {
    if (link) window.open(link, isNewTab ? '_blank' : '')
  }, [])

  return { handleOpenExternalLink }
}
