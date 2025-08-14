'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

type Testimonial = {
  name: string
  title: string
  company: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  // {
  //   name: 'Dr. Sarah Johnson',
  //   title: 'Senior Data Scientist',
  //   company: 'Tech Solutions Inc.',
  //   content: "Pavan's work on the chili price prediction model was exceptional. His attention to detail and innovative approach to time series forecasting delivered results that exceeded our expectations.",
  //   rating: 5
  // },
  // {
  //   name: 'Rajesh Kumar',
  //   title: 'ML Engineering Manager',
  //   company: 'Analytics Pro',
  //   content: "Working with Pavan on the recommendation engine project was a great experience. His technical skills combined with his ability to translate business requirements into ML solutions is impressive.",
  //   rating: 5
  // },
  // {
  //   name: 'Prof. Michael Chen',
  //   title: 'Academic Supervisor',
  //   company: 'IIIT Lucknow',
  //   content: "Pavan consistently demonstrates strong analytical thinking and research capabilities. His thesis work on scalable recommendation systems shows great promise for real-world applications.",
  //   rating: 5
  // },
  // {
  //   name: 'Hiring Manager',
  //   title: 'Mentor during Internship',
  //   company: 'ITC Limited',
  //   content: "The demand forecasting system Pavan built reduced our inventory costs by 15% while maintaining 95% forecast accuracy. Outstanding work!",
  //   rating: 5
  // },
  // {
  //   name: 'Priya Sharma',
  //   title: 'Product Manager',
  //   company: 'E-commerce Startup',
  //   content: "Pavan's data visualization dashboard transformed how our team understands customer behavior. His ability to present complex data in an intuitive way is remarkable.",
  //   rating: 5
  // },
  // {
  //   name: 'Alex Rodriguez',
  //   title: 'Senior Developer',
  //   company: 'Data Corp',
  //   content: "Collaborated with Pavan on several ML projects. His code quality, documentation, and testing practices are exemplary. A true professional.",
  //   rating: 5
  // }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feedback from colleagues, mentors, and collaborators
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <FaQuoteLeft className="w-8 h-8 text-blue-600 opacity-20" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center justify-end mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.title}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="mb-6 opacity-90">
              Let's discuss how I can help bring your data science projects to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Start a Project
              </a>
              <a
                href="https://www.linkedin.com/in/pavan-eleti-800a48305"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials