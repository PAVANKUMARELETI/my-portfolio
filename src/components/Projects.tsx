'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projectsRef = useScrollAnimation('up')

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented features like user authentication, product search, cart management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://demo-link.com'
    },
    {
      title: 'Task Management App',
      description: 'Developed a collaborative task management application with real-time updates using WebSocket. Features include task assignment, progress tracking, and team collaboration.',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/task-management',
      demo: 'https://demo-link.com'
    },
    {
      title: 'Portfolio Website',
      description: 'Created a modern portfolio website with smooth animations and responsive design. Implemented dark mode, contact form, and blog section.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://demo-link.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Built a weather dashboard that displays current weather and forecasts using OpenWeatherMap API. Features include location search, weather maps, and historical data.',
      technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS Modules'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://demo-link.com'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute top-40 right-[20%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-40 left-[30%] w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 