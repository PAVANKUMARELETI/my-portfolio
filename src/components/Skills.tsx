'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Machine Learning',
    items: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning',
      'Time Series Analysis',
      'Natural Language Processing',
      'Computer Vision',
      'Ensemble Methods',
      'Model Optimization'
    ]
  },
  {
    category: 'Programming & Tools',
    items: [
      'Python',
      'SQL',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Jupyter',
      'Git',
      'Docker'
    ]
  },
  {
    category: 'Data Analysis & Visualization',
    items: [
      'Statistical Analysis',
      'A/B Testing',
      'Data Visualization',
      'Tableau',
      'Power BI',
      'Matplotlib',
      'Seaborn',
      'Plotly'
    ]
  },
  {
    category: 'Domain Expertise',
    items: [
      'Price Prediction',
      'Market Analysis',
      'Agricultural Analytics',
      'Supply Chain Analytics',
      'Business Intelligence',
      'Data Mining',
      'Predictive Modeling',
      'Risk Analysis'
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical skills focused on building scalable machine learning solutions
            and driving data-driven decision making in agricultural and business domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 