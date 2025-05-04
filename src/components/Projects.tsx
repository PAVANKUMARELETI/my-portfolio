'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Chilli Price Prediction System',
    description: 'Leading the development of an advanced ML system for predicting chilli prices using time series analysis and ensemble methods, achieving 92% accuracy in price forecasting.',
    technologies: ['Python', 'PyTorch', 'Pandas', 'Scikit-learn', 'Time Series Analysis'],
    github: 'https://github.com/yourusername/chilli-price-prediction',
    demo: 'https://demo.chilli-price-prediction.com',
    image: '/projects/chilli-prediction.jpg'
  },
  {
    title: 'Agricultural Market Analysis',
    description: 'Developed a comprehensive market analysis system for agricultural commodities using machine learning and statistical analysis, helping optimize supply chain decisions.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'SQL', 'Tableau'],
    github: 'https://github.com/yourusername/agri-market-analysis',
    demo: 'https://demo.agri-market-analysis.com',
    image: '/projects/agri-market.jpg'
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Created an optimization model for agricultural supply chain management using machine learning, reducing operational costs by 25% and improving delivery efficiency.',
    technologies: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Docker'],
    github: 'https://github.com/yourusername/supply-chain-optimization',
    demo: 'https://demo.supply-chain.com',
    image: '/projects/supply-chain.jpg'
  },
  {
    title: 'Crop Yield Prediction',
    description: 'Implemented a deep learning model for crop yield prediction using satellite imagery and weather data, achieving 88% accuracy in yield forecasting.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/yourusername/crop-yield-prediction',
    demo: 'https://demo.crop-yield.com',
    image: '/projects/crop-yield.jpg'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are some of my projects that demonstrate my expertise in building machine learning solutions
            for agricultural and business domains, with a focus on predictive analytics and optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 