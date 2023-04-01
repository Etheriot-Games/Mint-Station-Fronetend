import { useCallback, useMemo } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { ROUTE_PATH } from 'config/routes/routePath'
import { useHandleExternalLink } from 'hooks'
// This hooks used for react-router to get router informations and manage them
export const useGetCurrentURLPath = () => {
  const location = useLocation()
  return useMemo(() => location.pathname.replace('/', ''), [location.pathname])
}

export const useAppNavigate = () => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(
    (route: string) => {
      navigate(route)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [navigate]
  )

  return { handleNavigate }
}

export const useHandleRoute = () => {
  const { handleNavigate } = useAppNavigate()
  const { handleOpenExternalLink } = useHandleExternalLink()

  const handleRoutes = useCallback(
    (route: string) => {
      const routeInfo = ROUTE_PATH[route]
      if (routeInfo.isExternal) handleOpenExternalLink(routeInfo.url)
      else handleNavigate(routeInfo.url)
    },
    [handleNavigate, handleOpenExternalLink]
  )

  return { handleRoutes }
}
