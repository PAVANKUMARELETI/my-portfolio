'use client'

import { motion } from 'framer-motion'
import FadeInWhenVisible from './FadeInWhenVisible'

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
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible direction="up">
          <h2 className="heading-2 text-gray-900 mb-4 text-center">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-center">
            A comprehensive set of technical skills focused on building scalable machine learning solutions
            and driving data-driven decision making in agricultural and business domains.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <FadeInWhenVisible key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
