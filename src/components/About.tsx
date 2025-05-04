'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const About = () => {
  const leftRef = useScrollAnimation('up')
  const rightRef = useScrollAnimation('down')

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={leftRef}>
            <h3 className="heading-3 text-gray-900 mb-6">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I am a passionate Data Scientist with expertise in machine learning, statistical analysis,
              and data visualization. With a strong foundation in both technical and business domains,
              I help organizations make data-driven decisions and build intelligent solutions.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in data science began with a curiosity about patterns and predictions,
              which led me to explore various domains including natural language processing,
              computer vision, and predictive analytics.
            </p>
            <p className="text-gray-600">
              When I'm not coding or analyzing data, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through technical writing.
            </p>
          </div>

          <div ref={rightRef} className="grid grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-600">
                M.S. in Data Science<br />
                University Name<br />
                2018 - 2020
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Experience</h4>
              <p className="text-gray-600">
                5+ Years in<br />
                Data Science & ML<br />
                Industry Experience
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">
                Based in<br />
                Your City, Country<br />
                Open to Remote
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Interests</h4>
              <p className="text-gray-600">
                AI/ML Research<br />
                Open Source<br />
                Technical Writing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 