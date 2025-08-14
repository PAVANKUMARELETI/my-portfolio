'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaCode, FaChartLine, FaGraduationCap, FaRocket } from 'react-icons/fa'

type Experience = {
  title: string
  company: string
  location: string
  duration: string
  type: 'work' | 'education' | 'teaching'
  description: string
  responsibilities: string[]
  technologies?: string[]
  achievements: string[]
  color: string
  icon: any
}

const experienceData: Experience[] = [
  {
    title: 'Data Science Intern',
    company: 'ITC Limited',
    location: 'Hybrid',
    duration: 'September 2024 - Present',
    type: 'work',
    description: 'Leading comprehensive agricultural analytics projects focusing on commodity price prediction using advanced machine learning techniques.',
    responsibilities: [
      'Leading comprehensive Chilli Price Prediction project using advanced ML techniques including LSTM, ARIMA, and ensemble methods',
      'Designed end-to-end ML pipeline with modular architecture for data loading, preprocessing, feature engineering, and model training',
      'Implemented automated backtesting and model evaluation frameworks with comprehensive testing suite achieving 90%+ code coverage',
      'Built robust data management system handling raw, external, interim, and processed datasets with version control integration',
      'Created interactive Jupyter notebooks for EDA, feature engineering, model prototyping, and evaluation with detailed documentation',
      'Developed automated training, scoring, and data preparation scripts for production-ready ML workflows',
      'Established comprehensive documentation including architecture design, data dictionary, experimentation logs, and model cards',
      'Analyzing historical price data and market trends to identify seasonal patterns and key price indicators for agricultural commodities',
      'Collaborating with agricultural experts and cross-functional teams to integrate ML solutions into business decision-making processes'
    ],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'MLflow', 'Docker', 'Git', 'Jupyter'],
    achievements: [
      'Built comprehensive ML pipeline with 90%+ test coverage',
      'Developed production-ready agricultural price prediction system',
      'Created extensive documentation and model cards',
      'Established automated evaluation and backtesting workflows'
    ],
    color: 'from-green-500 to-emerald-500',
    icon: FaBriefcase
  },
  {
    title: 'Teaching Assistant',
    company: 'IIIT Lucknow Research Lab',
    location: 'Lucknow, India',
    duration: '2024 - 2025',
    type: 'teaching',
    description: 'Supporting academic excellence by assisting in teaching machine learning and data science courses while mentoring students.',
    responsibilities: [
      'Assisted professors in teaching Machine Learning and Data Science courses to undergraduate and graduate students',
      'Conducted tutorial sessions and lab sessions for courses including ML Algorithms, Python Programming, and Statistical Methods',
      'Graded assignments, projects, and exams while providing detailed feedback to help students improve their understanding',
      'Mentored 15+ undergraduate students on machine learning projects and guided them through research methodologies',
      'Developed supplementary learning materials, coding exercises, and practical examples to enhance student comprehension',
      'Organized study groups and office hours to provide additional academic support to struggling students',
      'Collaborated with faculty to design course curriculum and assessment strategies for data science programs',
      'Assisted in research activities including literature reviews, data collection, and preliminary analysis for ongoing projects'
    ],
    technologies: ['Python', 'R', 'Jupyter', 'Teaching Tools', 'Research Methods'],
    achievements: [
      'Successfully mentored 15+ undergraduate students',
      'Developed comprehensive learning materials',
      'Received positive feedback from faculty and students',
      'Contributed to curriculum development initiatives'
    ],
    color: 'from-orange-500 to-red-500',
    icon: FaChartLine
  },
  {
    title: 'M.Sc. in Data Science',
    company: 'IIIT Lucknow',
    location: 'Lucknow, India',
    duration: '2023 - 2026',
    type: 'education',
    description: 'Pursuing advanced studies in machine learning, deep learning, and big data analytics with focus on practical applications.',
    responsibilities: [
      'Specialized in Machine Learning, Deep Learning, and Big Data Analytics',
      'Relevant Coursework: Advanced Machine Learning, Deep Learning, Big Data Processing, Statistical Learning, Natural Language Processing',
      'Thesis: "Scalable Recommendation Systems for E-commerce Platforms"',
      'Maintaining CGPA of 8.5+ with focus on practical project implementations'
    ],
    achievements: [
      'Consistent academic performance with 8.5+ CGPA',
      'Selected for advanced ML and AI coursework',
      'Active participation in research projects',
      'Leadership roles in academic initiatives'
    ],
    color: 'from-blue-500 to-indigo-500',
    icon: FaGraduationCap
  },
  {
    title: 'M.Sc. in Artificial Intelligence and Machine Learning',
    company: 'Scaler, WOOLF University',
    location: 'Online',
    duration: '2024 - 2026',
    type: 'education',
    description: 'Industry-focused program bridging academic knowledge with practical AI/ML applications in real-world scenarios.',
    responsibilities: [
      'Advanced studies in AI and ML with focus on practical applications',
      'Hands-on experience with cutting-edge AI technologies and frameworks',
      'Collaborative projects with industry experts and peers',
      'Focus on MLOps, model deployment, and production systems'
    ],
    technologies: ['PyTorch', 'TensorFlow', 'MLOps Tools', 'Cloud Platforms', 'Docker', 'Kubernetes'],
    achievements: [
      'Completed advanced AI/ML coursework with industry focus',
      'Built production-ready ML systems',
      'Collaborated with global peer network',
      'Gained practical experience in MLOps and deployment'
    ],
    color: 'from-purple-500 to-pink-500',
    icon: FaRocket
  }
]

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work': return <FaBriefcase className="w-4 h-4" />
      case 'education': return <FaGraduationCap className="w-4 h-4" />
      case 'teaching': return <FaChartLine className="w-4 h-4" />
      default: return <FaBriefcase className="w-4 h-4" />
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'work': return { bg: 'bg-blue-100 text-blue-800', label: 'Professional Experience' }
      case 'education': return { bg: 'bg-green-100 text-green-800', label: 'Education' }
      case 'teaching': return { bg: 'bg-purple-100 text-purple-800', label: 'Teaching & Mentorship' }
      default: return { bg: 'bg-gray-100 text-gray-800', label: 'Experience' }
    }
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
            Professional Journey & Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building expertise through diverse experiences in industry, academia, and teaching
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>

          <div className="space-y-8">
            {experienceData.map((exp, index) => {
              const isExpanded = expandedItems.includes(index)
              const typeBadge = getTypeBadge(exp.type)
              const IconComponent = exp.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden md:block"></div>

                  {/* Experience Card */}
                  <div className="md:ml-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{exp.title}</h3>
                            <h4 className="text-xl opacity-90">{exp.company}</h4>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1 md:justify-end">
                            <FaCalendarAlt className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 md:justify-end">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Type Badge & Toggle */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${typeBadge.bg}`}>
                          {getTypeIcon(exp.type)}
                          {typeBadge.label}
                        </span>

                        <button
                          onClick={() => toggleExpanded(index)}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          {isExpanded ? 'Show Less' : 'Show More'}
                          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <FaCode className="text-blue-600" />
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Expanded Content */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          {/* Responsibilities */}
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities</h5>
                            <ul className="space-y-3">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h5>
                            <div className="grid md:grid-cols-2 gap-4">
                              {exp.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    ✓
                                  </div>
                                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="mb-6 opacity-90">
              Looking for opportunities to apply my skills and continue growing in the field of data science and AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Let's Work Together
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience