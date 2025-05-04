'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    window.addEventListener('mousemove', updateMousePosition)
    
    // Hide cursor effect when mouse leaves the window
    const handleMouseLeave = () => setIsVisible(false)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className="fixed pointer-events-none z-50 w-6 h-6 rounded-full border-2 border-primary"
            animate={{
              x: mousePosition.x - 12,
              y: mousePosition.y - 12,
              scale: 1,
              opacity: 1
            }}
            initial={{
              scale: 0.5,
              opacity: 0
            }}
            exit={{
              scale: 0.5,
              opacity: 0
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5
            }}
          />
          
          {/* Cursor trail effect */}
          <motion.div
            className="fixed pointer-events-none z-40 w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm"
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              scale: 1,
              opacity: 0.5
            }}
            initial={{
              scale: 0.1,
              opacity: 0
            }}
            exit={{
              scale: 0.1,
              opacity: 0
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 1
            }}
          />
        </>
      )}
    </AnimatePresence>
  )
}

export default CursorEffect 