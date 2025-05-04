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
          <div ref={leftRef} className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="heading-3 mb-4">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a passionate Full Stack Developer with expertise in modern web technologies.
                With a strong foundation in both frontend and backend development, I create
                responsive and user-friendly web applications that deliver exceptional user experiences.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="heading-3 mb-4">What I Do</h3>
              <p className="text-gray-600 leading-relaxed">
                I specialize in building modern web applications using React, Next.js, and Node.js.
                My experience includes creating responsive designs, implementing RESTful APIs,
                and optimizing application performance for the best user experience.
              </p>
            </div>
          </div>

          <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-600">
                B.Tech in Computer Science<br />
                Your University<br />
                2017 - 2021
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Experience</h4>
              <p className="text-gray-600">
                Full Stack Developer<br />
                Various Projects<br />
                2+ Years
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Skills</h4>
              <p className="text-gray-600">
                React • Next.js • Node.js<br />
                TypeScript • Tailwind CSS<br />
                MongoDB • PostgreSQL
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Interests</h4>
              <p className="text-gray-600">
                Web Development<br />
                UI/UX Design<br />
                Open Source
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 