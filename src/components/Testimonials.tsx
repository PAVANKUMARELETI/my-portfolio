'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Hiring Manager, ITC',
    title: 'Mentor during Internship',
    feedback:
      'Pavan consistently delivered results during his internship with us. His understanding of data pipelines and predictive models stood out.',
  },
  {
    name: 'Dr. Ramesh Kumar',
    title: 'Professor, IIIT Lucknow',
    feedback:
      'Pavan demonstrated exceptional skill in applying machine learning to real-world problems. He’s always curious and ready to innovate.',
  },
  {
    name: 'Anusha Mehta',
    title: 'Senior Data Scientist, Amazon (Peer Reviewer)',
    feedback:
      'Pavan’s portfolio reflects a deep understanding of data science fundamentals and practical applications. His projects are industry-ready.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">What People Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white/90 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-4">“{t.feedback}”</p>
              <h4 className="text-md font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-primary">{t.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
