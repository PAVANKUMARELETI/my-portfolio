'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa'

const GitHubStats = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Contributions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <FaCode className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Public Repositories</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <FaStar className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">200+</div>
            <div className="text-gray-600 dark:text-gray-300">Total Stars</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <FaCodeBranch className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Total Forks</div>
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contribution Activity</h3>
          <img 
            src="https://github-readme-stats.vercel.app/api?username=PAVANKUMARELETI&show_icons=true&theme=default"
            alt="GitHub Stats"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default GitHubStats