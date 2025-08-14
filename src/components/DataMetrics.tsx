'use client'

import { motion } from 'framer-motion'
import FadeInWhenVisible from './FadeInWhenVisible'

const metrics = [
  {
    value: '50+',
    label: 'ML Models Built',
    icon: '🤖'
  },
  {
    value: '1M+',
    label: 'Data Points Processed',
    icon: '📊'
  },
  {
    value: '92%',
    label: 'Average Model Accuracy',
    icon: '🎯'
  },
  {
    value: '₹5M+',
    label: 'Business Value Generated',
    icon: '💰'
  },
  {
    value: '15+',
    label: 'Kaggle Competitions',
    icon: '🏆'
  },
  {
    value: '99.9%',
    label: 'Production Uptime',
    icon: '⚡'
  }
]

const DataMetrics = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible direction="up">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Data Science Impact at Scale
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Quantified results from real-world projects and continuous learning in machine learning and data science.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric, index) => (
            <FadeInWhenVisible key={index} direction="up" delay={index * 0.1}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                >
                  {metric.value}
                </motion.div>
                <p className="text-white/80 text-sm font-medium">{metric.label}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DataMetrics
