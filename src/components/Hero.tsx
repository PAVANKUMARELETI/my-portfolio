'use client'

import { motion, useScroll, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef, useState } from 'react'
import { IoMdArrowDown } from 'react-icons/io'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] })


const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>()
  const { scrollY } = useScroll()
  const marqueePos = useMotionValue(0)
  const lastScroll = useRef(0)

  const startAnimation = () => {
    const animate = () => {
      const width = marqueeRef.current?.scrollWidth || 0
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
  }, [marqueePos, scrollY])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/profile.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-8 text-black dark:text-white text-center md:text-left py-24">

          {/* Left: Text */}
          <div className="flex-1 md:ml-[-15rem]">
            <div className="mb-4">
              <TypeAnimation
                sequence={[
                  'Data Science Graduate',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                  'Python Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl md:text-3xl block"
              />
            </div>
          </div>

          {/* Right: Buttons (hidden on mobile) */}
          <div className="flex-1 flex-col items-center md:items-end gap-4 hidden md:flex">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-secondary transition"
            >
              📄 Download Resume
            </a>
            <a
              href="mailto:askpavaneleti@gmail.com"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white dark:bg-black border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/7993306508"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white dark:bg-black border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
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
          className="text-primary text-3xl flex justify-center"
        >
          <IoMdArrowDown />
        </motion.div>
      </div>

      {/* Scrolling Marquee Positioned Slightly Below Center in Mobile */}
      <div
        className="absolute bottom-[30%] md:bottom-0 w-full overflow-hidden h-24 z-20"
        onMouseEnter={() => cancelAnimationFrame(animationFrameRef.current!)}
        onMouseLeave={() => startAnimation()}
      >
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-30" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-30" />

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
              className={`text-6xl sm:text-7xl md:text-8xl font-bold mr-24 text-white ${oswald.className}`}
            >
              Pavan Eleti
            </h1>
          
          ))}
        </motion.div>
      </div>


    </section>
  )
}

export default Hero
