'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const WhyAmazon = () => {
  return (
    <section id="why-amazon" className="relative py-20 bg-white dark:bg-gray-900 text-center overflow-hidden">
      {/* Background Amazon-style arrow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="w-[400px] h-[400px] opacity-5 blur-sm dark:opacity-10"
          fill="currentColor"
        >
          <path d="M196.6 384.4c-10.4-4.2-8.9-8.4 1.4-11.2 17.6-5.3 33.1-11.3 48.7-18.9 28.3-13.7 54.3-30.8 79.4-50.5 16.4-12.9 31.9-26.8 48.1-39.6 9.1-7.4 18.5-14.3 28.5-20.1 6.8-4.1 14.3-6.2 22.2-7.2 3.5-.5 7.2-.8 10.7-1.5 8.2-1.6 10.6-7.8 5-13.8-10.7-11.5-22-22.3-33.2-33.3-4.9-4.9-10.5-9.4-15.5-14.1-2.2-2-4.3-4.2-6.5-6.3-2.3-2.3-4.8-4.2-8.5-2.4-10.8 5.3-21.4 11.1-32.1 16.6-18.4 9.2-36.7 18.3-55.2 27.1-11.3 5.4-23 10.3-34.6 15.4-4.6 2-9.2 4.1-13.8 6.2-10.1 4.7-20.3 9.3-30.5 13.9-6.7 2.9-13.5 5.8-20.2 8.6-6.7 2.8-13.4 5.4-20.1 8.1-6.4 2.6-12.8 5.1-19.3 7.6-3.9 1.5-7.8 2.9-11.7 4.2-1.3.4-2.5 1-3.8 1.6z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Why Amazon?
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '120px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4"
        >
          I admire <span className="font-semibold text-primary">Amazon’s culture of innovation, customer obsession, and scale</span>.
          During my internship at <strong>ITC Limited</strong>, I applied ML to real business challenges —
          fueling my drive to build data products that impact millions.
          <br /><br />
          My projects — like a <span className="text-secondary font-medium">hybrid recommender system</span> and a
          <span className="text-secondary font-medium"> churn model saving ₹5M+</span> — reflect
          Amazon’s focus on <span className="text-primary font-medium">bar-raising performance and data-driven decision making</span>.
          <br /><br />
          I’m excited to contribute to <span className="font-semibold">AWS, Alexa, or Prime Video</span> with
          scalable, customer-focused machine learning solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <Link href="#contact">
            <button className="px-6 py-3 bg-primary text-white text-lg rounded-full hover:bg-secondary transition duration-300">
              📩 Let’s Talk
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyAmazon
