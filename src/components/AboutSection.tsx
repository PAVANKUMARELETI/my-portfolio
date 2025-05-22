'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const About = () => {
  const leftRef = useScrollAnimation('up')
  const rightRef = useScrollAnimation('down')

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute top-40 right-[20%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-40 left-[30%] w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hide left content on mobile */}
          <div ref={leftRef} className="space-y-6 hidden sm:block">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="heading-3 mb-4">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a recent graduate with a strong passion for data science and machine learning.
                My academic background and hands-on projects have equipped me with the skills to
                analyze complex data sets and build predictive models that drive business value.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="heading-3 mb-4">What I Do</h3>
              <p className="text-gray-600 leading-relaxed">
                I specialize in developing machine learning models and data analysis solutions.
                My experience includes working with large datasets, implementing statistical methods,
                and creating data visualizations to communicate insights effectively.
              </p>
            </div>
          </div>

          {/* Keep this visible on all screens */}
          <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-600">
                M.Sc. in Data Science<br />
                IIIT Lucknow<br />
                2024 - 2026
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Experience</h4>
              <p className="text-gray-600">
                Data Science Intern<br />
                ITC Limited<br />
                9 Months
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Skills</h4>
              <p className="text-gray-600">
                Python • R • SQL<br />
                TensorFlow • PyTorch<br />
                AWS • Spark
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Interests</h4>
              <p className="text-gray-600">
                ML Research<br />
                Big Data<br />
                Cloud Computing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About