'use client'

import { motion, useScroll, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { IoMdArrowDown } from 'react-icons/io'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] })

// Simple typing animation component
const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const titles = [
    'Machine Learning Engineer',
    'Data Scientist',
    'MLOps Engineer', 
    'AI Research Engineer',
    'Senior Data Analyst',
  ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])

  return (
    <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>()
  const { scrollY } = useScroll()
  const marqueePos = useMotionValue(0)
  const lastScroll = useRef(0)

  const startAnimation = () => {
    const animate = () => {
      if (!marqueeRef.current) return
      
      const width = marqueeRef.current.scrollWidth || 0
      let next = marqueePos.get() - 1.5
      const scrollDelta = scrollY.get() - lastScroll.current
      next += scrollDelta * 2
      lastScroll.current = scrollY.get()
      
      if (width && Math.abs(next) > width / 2) {
        next = 0
      }
      
      marqueePos.set(next)
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animationFrameRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    startAnimation()
    return () => {
      if (animationFrameRef.current !== undefined) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, []) // Removed dependencies to avoid infinite re-renders

  const handleMouseEnter = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }

  const handleMouseLeave = () => {
    startAnimation()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/profile.jpg"
          alt="Pavan Eleti - Machine Learning Engineer"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 text-white text-center md:text-left pt-4 md:pt-24">

          {/* Typing animation on top in mobile */}
          <div className="flex-1 pt-2 mb-4 md:mb-0 md:ml-[-15rem]">
            <TypingAnimation />
          </div>

          {/* Right: Buttons (hidden on mobile) */}
          <div className="flex-1 flex-col items-center md:items-end gap-4 hidden md:flex">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              📄 Download Resume
            </a>
            <a
              href="mailto:askpavaneleti@gmail.com"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-blue-500 text-white hover:bg-blue-600 hover:text-white transition"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/7993306508"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-green-500 text-white hover:bg-green-600 hover:text-white transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-400 text-3xl flex justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <IoMdArrowDown />
        </motion.div>
      </div>

      {/* Scrolling Marquee Positioned Slightly Below Center in Mobile */}
      <div
        className="absolute bottom-[30%] md:bottom-[20%] w-full overflow-hidden h-24 z-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/80 to-transparent z-30" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/80 to-transparent z-30" />

        <motion.div
          ref={marqueeRef}
          style={{
            display: 'inline-flex',
            whiteSpace: 'nowrap',
            x: marqueePos,
          }}
        >
          {Array.from({ length: 10 }).map((_, idx) => (
            <h1
              key={idx}
              className={`text-7xl sm:text-7xl md:text-8xl font-bold mr-24 text-white/90 ${oswald.className}`}
            >
              Pavan Eleti
            </h1>
          ))}
        </motion.div>
      </div>

      {/* Mobile Buttons - Show only on mobile */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 md:hidden z-30">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          📄 Resume
        </a>
        <a
          href="mailto:askpavaneleti@gmail.com"
          className="px-4 py-2 text-sm rounded-lg bg-white/20 backdrop-blur-sm border border-blue-400 text-white hover:bg-blue-600 transition"
        >
          Email
        </a>
        <a
          href="https://wa.me/7993306508"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm rounded-lg bg-white/20 backdrop-blur-sm border border-green-400 text-white hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Hero