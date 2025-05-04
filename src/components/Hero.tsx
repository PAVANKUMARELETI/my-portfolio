'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState, useRef } from 'react'

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [marqueeX, setMarqueeX] = useState(0)
  const speed = 1.5 // base speed

  useEffect(() => {
    let animationFrame: number
    let lastScrollY = window.scrollY
    let lastTimestamp = performance.now()

    const animate = (timestamp: number) => {
      const scrollDelta = window.scrollY - lastScrollY
      lastScrollY = window.scrollY
      const timeDelta = timestamp - lastTimestamp
      lastTimestamp = timestamp
      // Increase speed with scroll, but always move
      const velocity = speed + Math.abs(scrollDelta) * 0.5
      setMarqueeX((prev) => {
        // Move left, loop when out of view
        const width = marqueeRef.current?.offsetWidth || 0
        let next = prev - velocity * (timeDelta / 16)
        if (width && next < -width / 2) {
          next += width / 2
        }
        return next
      })
      animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/profile.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-[10%] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-[20%] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            <Image
              src="/images/profile.jpg"
              alt="Pavan Eleti"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Marquee Name */}
          <div className="overflow-hidden relative h-20 mb-6" style={{width: '100%'}}>
            <div ref={marqueeRef} style={{ display: 'flex', whiteSpace: 'nowrap', transform: `translateX(${marqueeX}px)`, transition: 'none' }}>
              <h1 className="text-6xl md:text-8xl font-bold inline-block mr-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pavan Eleti
              </h1>
              <h1 className="text-6xl md:text-8xl font-bold inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pavan Eleti
              </h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8"
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Fresh graduate with strong foundation in machine learning, statistical analysis, and data visualization.
            Passionate about building scalable data solutions and eager to contribute to Amazon's data-driven innovation.
            Seeking opportunities to apply my skills in recommendation systems and predictive modeling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/PAVANKUMARELETI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/pavan-kumar-eleti-800a48305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 