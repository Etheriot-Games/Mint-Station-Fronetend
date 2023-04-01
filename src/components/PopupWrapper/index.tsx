import { ReactNode, useCallback, useEffect } from 'react'

import { motion } from 'framer-motion'

import { animationVariants } from './animation'

const PopupWrapper = ({
  isOpen,
  handleIsOpen,
  children,
  parentRef,
  className,
}: {
  isOpen: boolean
  handleIsOpen: () => void
  children: ReactNode
  parentRef: React.RefObject<any>
  className: string
}) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const dropDownEl = parentRef.current
      if (!dropDownEl || dropDownEl.contains(event.target as Node)) return
      else if (isOpen) handleIsOpen()
    },
    [handleIsOpen, isOpen, parentRef]
  )

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <motion.div
      variants={animationVariants}
      initial="exit"
      animate={isOpen ? 'enter' : 'exit'}
      exit="exit"
      className={`absolute z-20 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default PopupWrapper
