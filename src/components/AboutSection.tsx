'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaBrain, FaHeart, FaLightbulb, FaChartLine } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Background elements remain same */}
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Passionate about transforming data into actionable insights that create real-world impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Personal Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FaRocket className="text-2xl text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">My Passion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm driven by the belief that <strong>data holds the key to solving complex real-world problems</strong>. 
                My journey in machine learning started with curiosity and has evolved into a mission to build 
                AI systems that create measurable impact for businesses and society.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What excites me most is the intersection of <strong>cutting-edge technology</strong> and 
                <strong>practical business applications</strong> - turning theoretical concepts into 
                production systems that real people use and benefit from.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FaBrain className="text-2xl text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">My Approach</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I believe in <strong>end-to-end ownership</strong> - from understanding business problems 
                to deploying scalable solutions. My philosophy is to combine rigorous scientific methodology 
                with pragmatic engineering practices, always keeping the end-user impact in mind.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <FaLightbulb className="text-xl text-orange-500" />
                <h4 className="font-bold text-gray-900">Currently Exploring</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Advanced time series forecasting with transformers, MLOps for agricultural analytics, 
                and building production-ready ML systems that scale.
              </p>
            </div>
          </motion.div>

          {/* Right: Values & Personal Insights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Impact Philosophy */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="text-2xl text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Impact Mindset</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business First</h4>
                    <p className="text-sm text-gray-600">Always start with understanding the business problem before jumping to solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scale Matters</h4>
                    <p className="text-sm text-gray-600">Building systems that can handle real-world scale and complexity</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                    <p className="text-sm text-gray-600">Staying curious and adapting to the rapidly evolving AI landscape</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Knowledge Sharing</h4>
                    <p className="text-sm text-gray-600">Mentoring others and contributing to the data science community</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Touch */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaHeart className="text-xl text-red-500" />
                <h4 className="font-bold text-gray-900">Beyond the Code</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                When I'm not building ML models, you'll find me mentoring students, exploring the latest 
                research papers, or thinking about how AI can solve problems in agriculture, healthcare, 
                and education. I believe technology should be a force for positive change.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white text-center">
              <h4 className="font-bold mb-2">Let's Create Impact Together</h4>
              <p className="text-sm mb-4 opacity-90">
                Always excited to discuss challenging problems and innovative solutions
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href="mailto:askpavaneleti@gmail.com"
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  Let's Connect
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About