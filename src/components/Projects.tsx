'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaDollarSign, FaClock, FaUsers, FaStar, FaCodeBranch } from 'react-icons/fa'

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

const projectData: Project[] = [
  // Featured Projects (your most important ones)
  {
    title: 'Chili Price Prediction System',
    description: 'Comprehensive ML pipeline for agricultural commodity price forecasting using LSTM, ARIMA, and ensemble methods with automated backtesting.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'MLflow', 'Docker', 'Jupyter'],
    github: 'https://github.com/PAVANKUMARELETI/chili-price-prediction',
    category: 'Machine Learning',
    featured: true,
    language: 'Python',
    complexity: 'Production',
    timeline: '3 months',
    businessMetrics: {
      accuracy: '92% forecast accuracy',
      scale: '500+ SKUs analyzed',
      performance: '40% better than baseline'
    }
  },
  {
    title: 'E-commerce Recommendation Engine',
    description: 'Hybrid recommendation system with collaborative filtering and content-based approaches, deployed with real-time inference API.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'AWS'],
    github: 'https://github.com/PAVANKUMARELETI/recommendation-system',
    demo: 'https://rec-system-demo.com',
    category: 'Machine Learning',
    featured: true,
    language: 'Python',
    complexity: 'Production',
    timeline: '4 months',
    businessMetrics: {
      revenue: '+$2.3M projected',
      accuracy: '89% user satisfaction',
      performance: '35% CTR increase'
    }
  },
  
  // Additional Projects from your GitHub
  {
    title: 'Sentiment Analysis Pipeline',
    description: 'NLP pipeline for real-time sentiment analysis of customer reviews using BERT and transformer models.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'MongoDB'],
    github: 'https://github.com/PAVANKUMARELETI/sentiment-analysis',
    category: 'Machine Learning',
    language: 'Python',
    complexity: 'Research'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for business intelligence with real-time data processing and visualization.',
    technologies: ['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/PAVANKUMARELETI/data-dashboard',
    demo: 'https://data-dashboard-demo.com',
    category: 'Web Development',
    language: 'JavaScript',
    complexity: 'Personal'
  },
  {
    title: 'Time Series Forecasting Toolkit',
    description: 'Comprehensive toolkit for time series analysis and forecasting with multiple model implementations.',
    technologies: ['Python', 'Scikit-learn', 'Statsmodels', 'Plotly', 'Jupyter'],
    github: 'https://github.com/PAVANKUMARELETI/time-series-toolkit',
    category: 'Data Analysis',
    language: 'Python',
    complexity: 'Research'
  },
  {
    title: 'ML Model Deployment Templates',
    description: 'Production-ready templates for deploying ML models with Docker, Kubernetes, and CI/CD pipelines.',
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'FastAPI', 'Prometheus'],
    github: 'https://github.com/PAVANKUMARELETI/ml-deployment-templates',
    category: 'Other',
    language: 'Python',
    complexity: 'Production'
  }
  // Add more projects from your GitHub...
]

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const categories = ['All', 'Machine Learning', 'Web Development', 'Data Analysis', 'Research', 'Other']

  const filteredProjects = useMemo(() => {
    let filtered = projectData.filter(project => 
      selectedCategory === 'All' || project.category === selectedCategory
    )
    
    if (showFeaturedOnly) {
      filtered = filtered.filter(project => project.featured)
    }
    
    return filtered
  }, [selectedCategory, showFeaturedOnly])

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Featured Projects & GitHub Portfolio
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Production ML systems, research projects, and open-source contributions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Filters */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-gray-200">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Featured Toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-12 h-6 rounded-full transition-colors ${
                showFeaturedOnly ? 'bg-blue-600' : 'bg-gray-300'
              }`}>
                <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 transform ${
                  showFeaturedOnly ? 'translate-x-6' : 'translate-x-0.5'
                } mt-0.5`}></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Featured Only</span>
            </label>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
                project.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200'
              }`}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full ${
                        project.language === 'Python' ? 'bg-blue-500' :
                        project.language === 'JavaScript' ? 'bg-yellow-500' :
                        'bg-gray-500'
                      }`}></div>
                      {project.language}
                    </span>
                    {project.complexity && (
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.complexity === 'Production' ? 'bg-green-100 text-green-800' :
                        project.complexity === 'Research' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {project.complexity}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              {/* Business Metrics */}
              {project.businessMetrics && (
                <div className="grid grid-cols-1 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  {Object.entries(project.businessMetrics).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                      <span className="font-semibold text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-md text-xs font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                    title="View Code"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                {(project.stars || project.forks) && (
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    {project.stars && (
                      <div className="flex items-center gap-1">
                        <FaStar className="w-3 h-3" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                    {project.forks && (
                      <div className="flex items-center gap-1">
                        <FaCodeBranch className="w-3 h-3" />
                        <span>{project.forks}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/PAVANKUMARELETI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            <FaGithub className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects