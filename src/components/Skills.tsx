'use client'

import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaCloud, FaDatabase, FaChartLine, FaCogs } from 'react-icons/fa'

type Skill = {
  name: string
  level: number
  category: string
  icon: any
  color: string
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 95, category: 'Programming', icon: FaCode, color: 'from-blue-500 to-blue-600' },
  { name: 'R', level: 85, category: 'Programming', icon: FaCode, color: 'from-blue-500 to-blue-600' },
  { name: 'SQL', level: 90, category: 'Programming', icon: FaDatabase, color: 'from-green-500 to-green-600' },
  { name: 'JavaScript', level: 80, category: 'Programming', icon: FaCode, color: 'from-yellow-500 to-yellow-600' },
  
  // Machine Learning
  { name: 'TensorFlow', level: 90, category: 'ML/AI', icon: FaBrain, color: 'from-orange-500 to-orange-600' },
  { name: 'PyTorch', level: 85, category: 'ML/AI', icon: FaBrain, color: 'from-red-500 to-red-600' },
  { name: 'Scikit-learn', level: 95, category: 'ML/AI', icon: FaBrain, color: 'from-purple-500 to-purple-600' },
  { name: 'Pandas', level: 95, category: 'Data Analysis', icon: FaChartLine, color: 'from-indigo-500 to-indigo-600' },
  { name: 'NumPy', level: 90, category: 'Data Analysis', icon: FaChartLine, color: 'from-blue-500 to-blue-600' },
  
  // Cloud & Tools
  { name: 'AWS', level: 80, category: 'Cloud', icon: FaCloud, color: 'from-orange-500 to-orange-600' },
  { name: 'Docker', level: 75, category: 'DevOps', icon: FaCogs, color: 'from-blue-500 to-blue-600' },
  { name: 'Git', level: 90, category: 'Tools', icon: FaCogs, color: 'from-gray-500 to-gray-600' },
  
  // Data Visualization
  { name: 'Matplotlib', level: 90, category: 'Visualization', icon: FaChartLine, color: 'from-green-500 to-green-600' },
  { name: 'Seaborn', level: 85, category: 'Visualization', icon: FaChartLine, color: 'from-teal-500 to-teal-600' },
  { name: 'Plotly', level: 80, category: 'Visualization', icon: FaChartLine, color: 'from-purple-500 to-purple-600' },
]

const categories = ['Programming', 'ML/AI', 'Data Analysis', 'Cloud', 'DevOps', 'Tools', 'Visualization']

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build data-driven solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category)
            if (categorySkills.length === 0) return null
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => {
                    const IconComponent = skill.icon
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {skill.level}% Proficiency
                            </p>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills