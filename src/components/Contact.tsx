'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import FadeInWhenVisible from './FadeInWhenVisible'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/mbloolzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        toast.success('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error('Failed to send. Try again later.')
      }
    } catch (err) {
      toast.error('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-indigo-50/80 to-purple-50/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible direction="up">
          <h2 className="heading-2 text-gray-900 mb-4 text-center">Get in Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-center">
            I'm actively seeking opportunities to contribute to Amazon's data science initiatives.
            Let's connect and discuss how my skills and experience can add value to your team.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeInWhenVisible direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:pavaneletisj@gmail.com"
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaEnvelope className="w-5 h-5 mr-4" />
                    pavaneletisj@gmail.com
                  </motion.a>
                  <motion.a
                    href="tel:+917993306508"
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaPhone className="w-5 h-5 mr-4" />
                    +91 7993306508
                  </motion.a>
                  <motion.div
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 5 }}
                  >
                    <FaMapMarkerAlt className="w-5 h-5 mr-4" />
                    Hyderabad, India
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
                <div className="flex space-x-6">
                  <motion.a
                    href="https://www.linkedin.com/in/pavan-kumar-eleti-800a48305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/PAVANKUMARELETI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Form */}
          <FadeInWhenVisible direction="right">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" className="hidden" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}

export default Contact
