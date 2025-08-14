'use client'

import { motion } from 'framer-motion'
import FadeInWhenVisible from './FadeInWhenVisible'
import { FaIndustry, FaChartLine, FaRocket, FaCogs } from 'react-icons/fa'

const industries = [
  {
    name: 'E-commerce & Retail',
    icon: <FaChartLine className="text-3xl text-blue-600" />,
    projects: ['Recommendation Systems', 'Customer Segmentation', 'Price Optimization'],
    impact: '35% increase in conversion rates',
    technologies: ['Collaborative Filtering', 'A/B Testing', 'Real-time ML']
  },
  {
    name: 'Telecommunications',
    icon: <FaCogs className="text-3xl text-green-600" />,
    projects: ['Churn Prediction', 'Network Optimization', 'Fraud Detection'],
    impact: '₹5M+ cost savings through retention',
    technologies: ['XGBoost', 'Survival Analysis', 'Time Series']
  },
  {
    name: 'Agriculture & FMCG',
    icon: <FaIndustry className="text-3xl text-orange-600" />,
    projects: ['Price Forecasting', 'Supply Chain Analytics', 'Demand Planning'],
    impact: '40% improvement in forecast accuracy',
    technologies: ['LSTM', 'Seasonal Decomposition', 'Prophet']
  },
  {
    name: 'Technology & SaaS',
    icon: <FaRocket className="text-3xl text-purple-600" />,
    projects: ['NLP Pipelines', 'MLOps Infrastructure', 'Automated Analytics'],
    impact: '91% accuracy in sentiment analysis',
    technologies: ['BERT', 'Docker', 'Kubernetes', 'FastAPI']
  }
]

const IndustryImpact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible direction="up">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Cross-Industry Data Science Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Demonstrating versatility and business acumen across multiple industries with 
            measurable outcomes and scalable ML solutions.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <FadeInWhenVisible key={index} direction="up" delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  {industry.icon}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                    <p className="text-primary font-semibold">{industry.impact}</p>
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Key Projects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.projects.map((project, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-20"></div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInWhenVisible direction="up" delay={0.8}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg">
              <span>Ready to drive impact in your industry</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}

export default IndustryImpact
