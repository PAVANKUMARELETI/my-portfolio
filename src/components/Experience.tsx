'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'M.Sc. in Data Science',
    company: 'IIIT Lucknow',
    period: '2024 - 2026',
    description: [
      'Specialized in Machine Learning, Deep Learning, and Big Data Analytics',
      'Relevant Coursework: Advanced Machine Learning, Deep Learning, Big Data Processing, Statistical Learning, Natural Language Processing',
      'Thesis: "Scalable Recommendation Systems for E-commerce Platforms"'
    ]
  },
  {
    title: 'M.Sc. in Artificial Intelligence and Machine Learning',
    company: 'Scaler, WOOLF University',
    period: '2024 - 2026',
    description: [
      'Advanced studies in AI and ML with focus on practical applications',
      'Hands-on experience with cutting-edge AI technologies and frameworks',
      'Collaborative projects with industry experts and peers'
    ]
  },
  {
    title: 'Data Science Intern',
    company: 'ITC Limited',
    period: 'September 2025 - Present',
    description: [
      'Leading a project on Chilli Price Prediction using advanced ML techniques',
      'Developing and implementing machine learning models for price forecasting',
      'Analyzing market trends and historical data to improve prediction accuracy',
      'Collaborating with cross-functional teams to integrate ML solutions'
    ]
  },
  {
    title: 'Research Assistant',
    company: 'IIIT Lucknow Research Lab',
    period: '2024 - 2025',
    description: [
      'Conducted research on deep learning applications in natural language processing',
      'Implemented and evaluated various ML algorithms for text classification tasks',
      'Mentored undergraduate students in machine learning projects',
      'Published research findings in academic journals'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-gray-900 mb-4">Education & Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional experience in data science and machine learning,
            focusing on building scalable solutions and driving business impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-primary font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start text-gray-600"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 