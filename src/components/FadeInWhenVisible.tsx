'use client'

import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef, ReactNode } from 'react'

interface FadeInWhenVisibleProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const FadeInWhenVisible = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = 'up',
  className = ''
}: FadeInWhenVisibleProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 50, x: 0 }
      case 'down': return { y: -50, x: 0 }
      case 'left': return { y: 0, x: 50 }
      case 'right': return { y: 0, x: -50 }
      default: return { y: 50, x: 0 }
    }
  }

  const offset = getDirectionOffset()

  // Fix: Use proper Framer Motion easing values
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: offset.y,
      x: offset.x,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Use bezier curve instead of string
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible