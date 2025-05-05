// app/blog/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Blog() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-white to-purple-50 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog Coming Soon
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm working on real-world data science stories, case studies, and insights.
          Stay tuned for updates!
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </section>
  )
}
