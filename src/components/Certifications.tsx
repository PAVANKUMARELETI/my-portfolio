'use client'

import { motion } from 'framer-motion'
import FadeInWhenVisible from './FadeInWhenVisible'
import { FaAws, FaGoogle, FaMicrosoft, FaCertificate, FaTrophy } from 'react-icons/fa'
import { SiKaggle, SiCoursera, SiUdacity } from 'react-icons/si'

const certifications = [
  {
    title: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: <FaAws className="text-orange-500 text-2xl" />,
    credential: 'ML-C01',
    status: 'Completed'
  },
  {
    title: 'Google Cloud Professional ML Engineer',
    issuer: 'Google Cloud',
    date: '2024',
    icon: <FaGoogle className="text-blue-500 text-2xl" />,
    credential: 'PCMLE',
    status: 'In Progress'
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow',
    date: '2023',
    icon: <FaCertificate className="text-orange-600 text-2xl" />,
    credential: 'TF-DEV',
    status: 'Completed'
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'deeplearning.ai (Coursera)',
    date: '2023',
    icon: <SiCoursera className="text-blue-600 text-2xl" />,
    credential: '5-Course Series',
    status: 'Completed'
  }
]

const achievements = [
  {
    title: 'Kaggle Competition: Top 5%',
    description: 'House Prices Advanced Regression - Ranked 128/4000+',
    icon: <SiKaggle className="text-cyan-500 text-2xl" />,
    date: '2024'
  },
  {
    title: 'Published Research Paper',
    description: 'ML Applications in Agricultural Price Prediction - IEEE Conference',
    icon: <FaTrophy className="text-yellow-500 text-2xl" />,
    date: '2024'
  },
  {
    title: 'ITC Innovation Challenge Winner',
    description: 'Best ML Solution for Supply Chain Optimization',
    icon: <FaTrophy className="text-gold text-2xl" />,
    date: '2024'
  },
  {
    title: 'GitHub Arctic Code Vault Contributor',
    description: 'Open Source ML Libraries - 500+ stars',
    icon: <FaCertificate className="text-gray-600 text-2xl" />,
    date: '2024'
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible direction="up">
          <h2 className="heading-2 text-gray-900 mb-4 text-center">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-center">
            Industry-recognized certifications and competitive achievements demonstrating technical expertise
            and commitment to continuous learning in data science and machine learning.
          </p>
        </FadeInWhenVisible>

        {/* Certifications */}
        <div className="mt-12">
          <FadeInWhenVisible direction="up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <FadeInWhenVisible key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {cert.icon}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                        <p className="text-gray-600">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      cert.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Credential: {cert.credential}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <FadeInWhenVisible direction="up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Key Achievements</h3>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <FadeInWhenVisible key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    {achievement.icon}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600 mb-3">{achievement.description}</p>
                      <span className="text-sm text-primary font-medium">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
