'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import FadeInWhenVisible from './FadeInWhenVisible'

const skillsData = [
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'Machine Learning', level: 90, category: 'ML/AI' },
  { name: 'SQL', level: 88, category: 'Database' },
  { name: 'Deep Learning', level: 85, category: 'ML/AI' },
  { name: 'AWS/Cloud', level: 82, category: 'Cloud' },
  { name: 'Data Visualization', level: 87, category: 'Analytics' },
  { name: 'Statistics', level: 83, category: 'Analytics' },
  { name: 'MLOps', level: 78, category: 'DevOps' }
]

const categories = ['All', 'Programming', 'ML/AI', 'Database', 'Cloud', 'Analytics', 'DevOps']

const SkillsVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory)

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible direction="up">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Technical Proficiency Levels
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Self-assessed skill levels based on project experience, certifications, and practical application.
          </p>
        </FadeInWhenVisible>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow'
                  : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Visualization */}
        <div className="space-y-6">
          {filteredSkills.map((skill, index) => (
            <FadeInWhenVisible key={skill.name} direction="right" delay={index * 0.1}>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full relative"
                  >
                    <div className="absolute right-2 top-0 bottom-0 flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full shadow"></div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {skill.category}
                  </span>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsVisualization
