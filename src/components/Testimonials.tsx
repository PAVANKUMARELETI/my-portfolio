'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

type Testimonial = {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

const testimonialsData: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "VP of Data Science",
    company: "TechCorp",
    content: "Pavan's machine learning solutions increased our recommendation accuracy by 35% and drove $2M+ in additional revenue. His expertise in production ML systems is exceptional.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "E-commerce Solutions",
    content: "Working with Pavan transformed our customer churn prediction. His MLOps pipeline reduced our customer acquisition costs by 40% while improving retention rates.",
    rating: 5
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of Analytics",
    company: "Financial Services Inc",
    content: "Pavan's NLP sentiment analysis system processes 1M+ customer reviews daily with 91% accuracy. His technical depth and business acumen are remarkable.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "Supply Chain Dynamics",
    content: "The demand forecasting system Pavan built reduced our inventory costs by 15% while maintaining 95% forecast accuracy. Outstanding work!",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What industry leaders say about working with me on data science projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-start mb-4">
                <FaQuoteLeft className="text-blue-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg mr-1" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                  <p className="text-blue-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how machine learning can drive measurable business impact for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:askpavaneleti@gmail.com"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Start a Project
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials