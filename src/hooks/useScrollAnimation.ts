'use client'

import { useEffect, useRef } from 'react'

export const useScrollAnimation = (direction: 'up' | 'down' = 'up') => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      currentElement.classList.add('scroll-reveal', direction)
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [direction])

  return elementRef
} 