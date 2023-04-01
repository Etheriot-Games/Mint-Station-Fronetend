import { useCallback } from 'react'

import { ReactComponent as BackToTop } from 'assets/svg/back_to_top.svg'

const BackToTopContainer = () => {
  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div
      className="fixed bottom-3 right-3 z-30 cursor-pointer rounded-full bg-secondary-600/90 dark:bg-primary-600/90 flex items-center justify-center w-10 h-10 shadow-xl"
      onClick={handleBackToTop}
    >
      <BackToTop className="w-4 h-auto fill-white dark:fill-black hover:scale-105 transition-all duration-300 will-change-transform" />
    </div>
  )
}

export default BackToTopContainer
