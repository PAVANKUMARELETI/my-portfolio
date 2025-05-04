import { useState } from 'react'

export const useHoverEffect = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return {
    isHovered,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: `transition-all duration-300 ${isHovered ? 'scale-105' : ''}`
    }
  }
} 