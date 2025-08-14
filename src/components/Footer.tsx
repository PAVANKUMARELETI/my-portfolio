"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative bg-gradient-to-r from-purple-100 via-white to-indigo-100 dark:from-black dark:to-gray-900 text-gray-700 dark:text-gray-300 backdrop-blur-sm shadow-inner overflow-hidden"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      {/* Amazon Arrow Watermark - Desktop Only */}
      <div className="absolute bottom-8 right-8 opacity-5 pointer-events-none hidden sm:block">
        <Image
          src="/images/amazon-arrow.png"
          alt="Amazon Arrow"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-12 text-center relative z-10"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Let’s Build the Future of AI Together @ Amazon
        </h3>
        <p className="text-sm max-w-2xl mx-auto mb-6">
          This site was built to showcase my journey in data science — from recommendation systems to NLP.
          Thank you for visiting! I'm excited about opportunities that blend AI with real-world impact.
        </p>

        <div className="flex justify-center items-center gap-6 mb-4">
          <a
            href="https://github.com/PAVANKUMARELETI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/pavan-kumar-eleti-800a48305"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Pavan Eleti. All rights reserved.
        </p>
      </motion.div>

      {/* Scroll to Top FAB */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-secondary transition"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Hashtag Badge */}
      <div className="absolute top-6 left-6 bg-white/80 dark:bg-gray-900/80 px-4 py-1 rounded-full text-xs font-semibold text-primary shadow backdrop-blur-sm">
        #HirePavan4Amazon
      </div>
    </footer>
  )
}

export default Footer
