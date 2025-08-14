'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaChartLine, FaClock } from 'react-icons/fa'

// Enhanced Project type
type Project = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo?: string
  category: 'Machine Learning' | 'Web Development' | 'Data Analysis' | 'Research' | 'Other'
  featured?: boolean
  stars?: number
  forks?: number
  language?: string
  lastUpdated?: string
  businessMetrics?: {
    revenue?: string
    cost_savings?: string
    accuracy?: string
    scale?: string
    performance?: string
  }
  complexity?: 'Production' | 'Research' | 'Personal'
  timeline?: string
}

const projects: Project[] = [
  {
    title: 'Chili Price Prediction System',
    description: 'Comprehensive agricultural commodity price prediction system using advanced ML techniques including LSTM, ARIMA, and ensemble methods. Built production-ready pipeline with 90%+ test coverage.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'ARIMA', 'Scikit-learn', 'Pandas', 'MLflow', 'Docker'],
    github: 'https://github.com/pavaneleti/chili-price-prediction',
    category: 'Machine Learning',
    featured: true,
    complexity: 'Production',
    timeline: '3 months',
    businessMetrics: {
      accuracy: '85%',
      cost_savings: '₹2M annually',
      scale: '10K+ daily predictions'
    }
  },
  {
    title: 'E-commerce Recommendation Engine',
    description: 'Scalable recommendation system for e-commerce platforms using hybrid deep learning approaches. Implemented collaborative filtering with neural networks.',
    technologies: ['Python', 'PyTorch', 'PostgreSQL', 'Redis', 'FastAPI', 'Docker'],
    github: 'https://github.com/pavaneleti/recommendation-engine',
    demo: 'https://recommender-demo.vercel.app',
    category: 'Machine Learning',
    featured: true,
    complexity: 'Research',
    timeline: '4 months',
    businessMetrics: {
      performance: '40% improvement in CTR',
      scale: '1M+ users',
      revenue: '₹5M increase in sales'
    }
  },
  {
    title: 'Real-time Sentiment Analysis',
    description: 'Social media sentiment analysis system with real-time processing capabilities using NLP and streaming technologies.',
    technologies: ['Python', 'NLTK', 'Kafka', 'Elasticsearch', 'React', 'D3.js'],
    github: 'https://github.com/pavaneleti/sentiment-analysis',
    demo: 'https://sentiment-tracker.netlify.app',
    category: 'Data Analysis',
    complexity: 'Production',
    timeline: '2 months',
    businessMetrics: {
      accuracy: '92%',
      scale: '100K+ tweets/day',
      performance: 'Sub-second latency'
    }
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Machine learning model to predict customer churn for telecom industry with feature importance analysis and actionable insights.',
    technologies: ['Python', 'XGBoost', 'Pandas', 'Matplotlib', 'Streamlit'],
    github: 'https://github.com/pavaneleti/churn-prediction',
    demo: 'https://churn-predictor.streamlit.app',
    category: 'Machine Learning',
    complexity: 'Personal',
    timeline: '1 month',
    businessMetrics: {
      accuracy: '88%',
      cost_savings: '₹500K annually'
    }
  },
  {
    title: 'Data Science Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS showcasing data science projects and skills.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/pavaneleti/portfolio',
    demo: 'https://pavaneleti.vercel.app',
    category: 'Web Development',
    complexity: 'Personal',
    timeline: '2 weeks'
  },
  {
    title: 'Time Series Forecasting Dashboard',
    description: 'Interactive dashboard for time series analysis and forecasting with multiple algorithms and visualization capabilities.',
    technologies: ['Python', 'Plotly', 'Dash', 'Prophet', 'ARIMA', 'Pandas'],
    github: 'https://github.com/pavaneleti/forecasting-dashboard',
    demo: 'https://forecasting-app.herokuapp.com',
    category: 'Data Analysis',
    complexity: 'Personal',
    timeline: '3 weeks',
    businessMetrics: {
      accuracy: '82%',
      performance: 'Real-time updates'
    }
  }
]

const categories = ['All', 'Machine Learning', 'Data Analysis', 'Web Development', 'Research']

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my data science and machine learning projects with real business impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      {project.complexity && (
                        <span className="flex items-center gap-1">
                          <FaCode className="w-3 h-3" />
                          {project.complexity}
                        </span>
                      )}
                      {project.timeline && (
                        <span className="flex items-center gap-1">
                          <FaClock className="w-3 h-3" />
                          {project.timeline}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <FaStar className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Business Metrics */}
              {project.businessMetrics && (
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-green-900/10">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <FaChartLine className="text-green-600" />
                    Business Impact
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(project.businessMetrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace('_', ' ')}:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="p-6">
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex-1 justify-center"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="mb-6 opacity-90">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <a
              href="https://github.com/pavaneleti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              <FaGithub className="w-5 h-5" />
              Visit My GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects