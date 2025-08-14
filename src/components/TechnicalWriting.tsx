'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import FadeInWhenVisible from './FadeInWhenVisible'
import { FaBook, FaExternalLinkAlt, FaCalendarAlt, FaEye, FaHeart } from 'react-icons/fa'
import { SiMedium, SiLinkedin, SiKaggle, SiGithub } from 'react-icons/si'

const publications = [
  {
    title: 'Hybrid Recommendation Systems: Combining Collaborative and Content-Based Approaches',
    type: 'Research Paper',
    venue: 'IEEE Conference on Machine Learning Applications',
    date: 'August 2024',
    description: 'Comprehensive analysis of hybrid recommendation algorithms with real-world performance benchmarks across e-commerce datasets.',
    tags: ['Machine Learning', 'Recommendation Systems', 'E-commerce'],
    link: 'https://ieee.org/papers/hybrid-recommendations',
    icon: <FaBook className="text-blue-600" />,
    platform: 'IEEE',
    metrics: { views: '2.3K', citations: '12' }
  },
  {
    title: 'MLOps Best Practices: From Jupyter Notebooks to Production Systems',
    type: 'Technical Article',
    venue: 'Medium Publication',
    date: 'July 2024', 
    description: 'Step-by-step guide for transitioning ML models from experimentation to production with Docker, Kubernetes, and monitoring.',
    tags: ['MLOps', 'DevOps', 'Production ML'],
    link: 'https://medium.com/@pavaneleti/mlops-production',
    icon: <SiMedium className="text-gray-900" />,
    platform: 'Medium',
    metrics: { views: '5.1K', likes: '234' }
  },
  {
    title: 'Time Series Forecasting in Agriculture: LSTM vs Traditional Methods',
    type: 'Case Study',
    venue: 'Kaggle Datasets & Notebooks',
    date: 'June 2024',
    description: 'Comparative analysis of LSTM, ARIMA, and Prophet models for crop price prediction using 5 years of agricultural data.',
    tags: ['Time Series', 'Agriculture', 'Deep Learning'],
    link: 'https://kaggle.com/pavaneleti/agri-forecasting',
    icon: <SiKaggle className="text-cyan-500" />,
    platform: 'Kaggle',
    metrics: { views: '8.7K', upvotes: '156' }
  },
  {
    title: 'Interpretable AI: Making Black-Box Models Transparent with SHAP',
    type: 'Tutorial',
    venue: 'LinkedIn Article',
    date: 'May 2024',
    description: 'Practical guide to using SHAP values for model interpretability with real examples from churn prediction and loan approval models.',
    tags: ['Explainable AI', 'SHAP', 'Model Interpretability'],
    link: 'https://linkedin.com/pulse/interpretable-ai-shap-pavan-eleti',
    icon: <SiLinkedin className="text-blue-700" />,
    platform: 'LinkedIn',
    metrics: { views: '3.4K', reactions: '89' }
  },
  {
    title: 'Open Source ML Pipeline: End-to-End Customer Segmentation',
    type: 'GitHub Repository',
    venue: 'GitHub',
    date: 'April 2024',
    description: 'Complete ML pipeline with automated preprocessing, model training, and deployment scripts. Includes detailed documentation and example datasets.',
    tags: ['Open Source', 'Customer Segmentation', 'Pipeline'],
    link: 'https://github.com/pavaneleti/ml-customer-segmentation',
    icon: <SiGithub className="text-gray-800" />,
    platform: 'GitHub',
    metrics: { views: '1.2K', stars: '47' }
  }
]

const categories = ['All', 'Research Paper', 'Technical Article', 'Case Study', 'Tutorial', 'GitHub Repository']

const TechnicalWriting = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredPublications = selectedCategory === 'All' 
    ? publications 
    : publications.filter(pub => pub.type === selectedCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible direction="up">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Technical Publications & Writing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Sharing knowledge through research publications, technical articles, and open-source contributions
            to the data science community.
          </p>
        </FadeInWhenVisible>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow'
                  : 'bg-white text-gray-600 hover:bg-primary hover:text-white border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.map((pub, index) => (
            <FadeInWhenVisible key={index} direction="up" delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {pub.icon}
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {pub.type}
                    </span>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {pub.title}
                </h3>

                {/* Venue & Date */}
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <FaCalendarAlt className="text-xs" />
                  <span>{pub.venue} • {pub.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {pub.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                  <span className="flex items-center gap-1">
                    <FaEye />
                    {pub.metrics.views || pub.metrics.stars} {pub.platform === 'GitHub' ? 'Stars' : 'Views'}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart />
                    {pub.metrics.citations || pub.metrics.likes || pub.metrics.upvotes || pub.metrics.reactions}
                    {pub.platform === 'IEEE' ? ' Citations' : pub.platform === 'Kaggle' ? ' Upvotes' : ' Reactions'}
                  </span>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Call to Action */}
        <FadeInWhenVisible direction="up" delay={0.8}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Interested in collaborating on research or technical content?
            </p>
            <a
              href="mailto:askpavaneleti@gmail.com?subject=Collaboration Opportunity"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors shadow-lg"
            >
              Let's Connect
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}

export default TechnicalWriting
