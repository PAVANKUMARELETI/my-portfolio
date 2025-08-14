'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import FadeInWhenVisible from './FadeInWhenVisible'
import { FaChartBar, FaDatabase, FaRobot, FaClock, FaCheckCircle, FaTimes } from 'react-icons/fa'

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Recommendation Engine',
    subtitle: 'Hybrid ML System for Product Discovery',
    duration: '3 months',
    teamSize: 'Solo Project',
    challenge: 'E-commerce platform with 100K+ users had poor product discovery, leading to 65% bounce rate and low conversion.',
    solution: 'Built hybrid recommendation system combining collaborative filtering and content-based approaches with real-time inference.',
    impact: [
      'Increased CTR by 35%',
      'Reduced bounce rate to 42%',
      'Generated $2.3M simulated revenue',
      'Improved user session time by 40%'
    ],
    techStack: ['Python', 'TensorFlow', 'Redis', 'AWS EC2', 'Apache Spark'],
    methodology: [
      'Data collection from user interactions',
      'Feature engineering for user/item embeddings', 
      'Model training with ALS and Neural Collaborative Filtering',
      'A/B testing with 20% traffic split',
      'Production deployment with monitoring'
    ],
    results: {
      beforeAfter: [
        { metric: 'CTR', before: '2.1%', after: '2.8%' },
        { metric: 'Conversion Rate', before: '1.2%', after: '1.5%' },
        { metric: 'Avg Session Time', before: '3.2 min', after: '4.5 min' }
      ]
    },
    icon: <FaRobot className="text-2xl" />
  },
  {
    id: 2,
    title: 'Telecom Churn Prediction Model',
    subtitle: 'Proactive Customer Retention System',
    duration: '4 months',
    teamSize: 'Data Science Team (3 members)',
    challenge: 'Telecom company losing 15% customers quarterly with no early warning system, resulting in ₹8M annual revenue loss.',
    solution: 'Developed XGBoost-based churn prediction model with real-time scoring and automated retention campaigns.',
    impact: [
      'Achieved 92% prediction accuracy',
      'Reduced churn rate to 8%',
      'Saved ₹5M+ in retention costs',
      'Increased customer lifetime value by 25%'
    ],
    techStack: ['Python', 'XGBoost', 'AWS SageMaker', 'Apache Airflow', 'PostgreSQL'],
    methodology: [
      'Exploratory data analysis on 2 years customer data',
      'Feature engineering: RFM analysis, usage patterns',
      'Model selection: XGBoost vs RandomForest vs Neural Networks',
      'Hyperparameter tuning with Bayesian optimization',
      'MLOps pipeline with automated retraining'
    ],
    results: {
      beforeAfter: [
        { metric: 'Churn Rate', before: '15%', after: '8%' },
        { metric: 'Precision', before: 'N/A', after: '92%' },
        { metric: 'Customer LTV', before: '₹12K', after: '₹15K' }
      ]
    },
    icon: <FaChartBar className="text-2xl" />
  }
]

const CaseStudySection = () => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible direction="up">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Deep-Dive Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Detailed breakdown of end-to-end data science projects showcasing problem-solving approach,
            technical implementation, and measurable business outcomes.
          </p>
        </FadeInWhenVisible>

        {/* Case Study Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg shadow-sm border p-2 gap-2">
            {caseStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setSelectedCase(study)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                  selectedCase.id === study.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {study.icon}
                <span className="font-medium">{study.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Details */}
        <motion.div
          key={selectedCase.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 border"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCase.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{selectedCase.subtitle}</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p><FaClock className="inline mr-1" /> {selectedCase.duration}</p>
                <p><FaDatabase className="inline mr-1" /> {selectedCase.teamSize}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Challenge */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FaTimes className="text-red-500 mr-2" />
                  Challenge
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedCase.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Solution
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedCase.solution}</p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Methodology</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {selectedCase.methodology.map((step, index) => (
                    <li key={index} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Impact */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCase.impact.map((impact, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 font-medium text-center">{impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Before/After Results */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Metrics</h4>
                <div className="space-y-3">
                  {selectedCase.results.beforeAfter.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{metric.metric}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-red-600 text-sm">Before: {metric.before}</span>
                          <span className="text-gray-400">→</span>
                          <span className="text-green-600 font-semibold">After: {metric.after}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudySection
