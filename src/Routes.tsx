import { lazy } from 'react'

import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

const Mint = lazy(() => import('./pages/Mint'))

const MainRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={'/'} element={<Mint />} />
        <Route path={'/*'} element={<Mint />} />
      </Routes>
    </AnimatePresence>
  )
}

export default MainRoutes
