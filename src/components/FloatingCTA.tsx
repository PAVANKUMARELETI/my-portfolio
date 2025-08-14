'use client'

import { useEffect, useState } from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const FloatingCTA = () => {
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const triggerPoint = windowHeight * 0.3
      setShowCTA(scrollY > triggerPoint)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {showCTA && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-full shadow-lg hover:bg-secondary transition-all"
          >
            <FaFileDownload className="text-lg" />
            Review Resume
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA
