'use client'

import { motion, useScroll, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef, useState } from 'react'
import { IoMdArrowDown } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>()
  const { scrollY } = useScroll()
  const marqueePos = useMotionValue(0)
  const lastScroll = useRef(0)
  const [isDark, setIsDark] = useState(false)

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

  // Toggle dark mode on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

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

      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark(prev => !prev)}
        className="absolute top-6 right-6 z-30 text-xl p-2 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur hover:scale-110 transition"
      >
        {isDark ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-gray-700" />}
      </button>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 flex flex-col items-center justify-center text-center w-full h-full text-black dark:text-white">
        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8"
        >
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
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300"
        >
          Fresh graduate with strong foundation in machine learning, statistical analysis, and data visualization.
          Passionate about building scalable data solutions and eager to contribute to Amazon's data-driven innovation.
          Seeking opportunities to apply my skills in recommendation systems and predictive modeling.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-6"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg hover:bg-secondary transition-all duration-300"
          >
            📄 Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-6"
        >
          <a href="https://github.com/PAVANKUMARELETI" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/pavan-kumar-eleti-800a48305" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
            <FaTwitter className="w-8 h-8" />
          </a>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex justify-center gap-4 mb-10"
        >
          <a
            href="mailto:youremail@example.com"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white dark:bg-black border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            <MdEmail className="text-xl" />
            Email Me
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white dark:bg-black border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary text-3xl absolute bottom-24"
        >
          <IoMdArrowDown />
        </motion.div>
      </div>

      {/* Marquee with fade-out edges */}
      <div
        className="absolute bottom-0 w-full overflow-hidden h-20 z-20"
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
              className="text-4xl sm:text-6xl md:text-8xl font-bold mr-24 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
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
