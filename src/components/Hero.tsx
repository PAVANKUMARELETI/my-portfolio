'use client'

import { motion, useScroll, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined) // Fix: Provide initial value
  const { scrollY } = useScroll()
  const marqueePos = useMotionValue(0)
  const lastScroll = useRef(0)

  // Typing animation
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Data Scientist',
    'Machine Learning Engineer',
    'AI Researcher',
    'Problem Solver'
  ]

  // Parallax effect for background
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Typing effect
  useEffect(() => {
    const tick = () => {
      const fullText = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      }
    }

    const timer = setTimeout(tick, isDeleting ? 100 : 150)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentIndex, texts])

  // Marquee animation
  useEffect(() => {
    let lastTime = 0
    const speed = 0.5

    const animate = (currentTime: number) => {
      if (lastTime !== 0) {
        const deltaTime = currentTime - lastTime
        const scrollVelocity = scrollY.get() - lastScroll.current
        lastScroll.current = scrollY.get()
        
        // Adjust speed based on scroll
        const adjustedSpeed = speed + Math.abs(scrollVelocity) * 0.01
        marqueePos.set(marqueePos.get() - adjustedSpeed)
        
        if (marqueePos.get() <= -100) {
          marqueePos.set(0)
        }
      }
      
      lastTime = currentTime
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [scrollY, marqueePos])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </motion.div>

      {/* Marquee Text */}
      <motion.div
        ref={marqueeRef}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 whitespace-nowrap text-8xl md:text-9xl font-bold text-gray-100 select-none pointer-events-none z-0"
        style={{ x: useTransform(marqueePos, (value) => `${value}%`) }}
      >
        PAVAN ELETI • DATA SCIENTIST • ML ENGINEER • PAVAN ELETI • DATA SCIENTIST • ML ENGINEER • 
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-4 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Pavan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Eleti</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8 h-12 flex items-center justify-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming complex data into actionable insights. Building AI solutions that create 
            <span className="font-semibold text-gray-800"> measurable business impact</span> and drive innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex gap-6 justify-center mb-12"
          >
            <a
              href="https://github.com/pavaneleti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/pavan-kumar-eleti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:askpavaneleti@gmail.com"
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaArrowDown size={16} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </section>
  )
}

export default Hero