// src/components/ProjectModal.tsx

'use client'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  details?: string
}

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  technologies,
  github,
  demo,
  details
}: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <IoClose size={24} />
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
            {details && (
              <p className="text-gray-600 dark:text-gray-400 mb-6 whitespace-pre-wrap">
                {details}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-gray-600">
                <FaGithub size={22} />
              </a>
              <a href={demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary text-gray-600">
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
