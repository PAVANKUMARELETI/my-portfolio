'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useState, useMemo } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ProjectModal from './ProjectModal'
import FadeInWhenVisible from './FadeInWhenVisible'
import { useRouter } from 'next/navigation'

// Project type
type Project = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  category?: string
  details?: string
}

const projectData: Project[] = [
  {
    title: 'E-commerce Recommendation System',
    description: 'Built a hybrid recommendation engine that increased simulated user engagement by 35% using collaborative + content-based filtering. The model mimicked Amazon-like behavior for ranking products by purchase probability.',
    technologies: ['Python', 'TensorFlow', 'Recommendation', 'ML'],
    github: 'https://github.com/PAVANKUMARELETI/recommendation-system',
    demo: 'https://demo-link.com',
    details: '• Hybrid of collaborative + content-based filtering\n• Cosine similarity and matrix factorization\n• Simulated CTR increase: 35%, conversion lift: 25%'
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Churn model using XGBoost predicting customer exits with 92% accuracy, reducing loss potential by ₹5M in a telecom scenario.',
    technologies: ['Python', 'XGBoost', 'Churn', 'ML'],
    github: 'https://github.com/PAVANKUMARELETI/churn-prediction',
    demo: 'https://demo-link.com',
    details: '• Feature engineering on contract + tenure\n• Applied XGBoost & LightGBM with tuning\n• Simulated business value: ₹5M+ savings'
  },
  {
    title: 'NLP Pipeline',
    description: 'Created an NLP pipeline with BERT achieving 91% accuracy for multi-class sentiment on real product reviews. Topics extracted via LDA.',
    technologies: ['Python', 'Transformers', 'NLP', 'BERT'],
    github: 'https://github.com/PAVANKUMARELETI/nlp-pipeline',
    demo: 'https://demo-link.com',
    details: '• HuggingFace Transformers + BERT fine-tuning\n• NLP Flow: Clean → Tokenize → Classify\n• F1 Score: 91% on multi-label review set'
  },
  {
    title: 'Time Series Forecasting',
    description: 'LSTM-based model for multivariate sales forecasting. Outperformed ARIMA and Prophet, cutting MAE by 40%.',
    technologies: ['Python', 'LSTM', 'Time Series', 'TensorFlow'],
    github: 'https://github.com/PAVANKUMARELETI/time-series-forecasting',
    demo: 'https://demo-link.com',
    details: '• Seasonal decomposition + trend features\n• LSTM vs ARIMA/Prophet benchmarking\n• 40% improvement in MAE over baselines'
  }
]

const Projects = () => {
  const projectsRef = useScrollAnimation('up')
  const [selectedTag, setSelectedTag] = useState('All')
  const [modalProject, setModalProject] = useState<Project | null>(null)

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projectData.forEach(project => project.technologies.forEach(tag => tags.add(tag)))
    return ['All', ...Array.from(tags)]
  }, [])

  const filteredProjects = selectedTag === 'All'
    ? projectData
    : projectData.filter(project => project.technologies.includes(selectedTag))

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute top-40 right-[20%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-40 left-[30%] w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible direction="up">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">Business Impact Projects: From Models to Metrics</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedTag === tag
                    ? 'bg-primary text-white shadow'
                    : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </FadeInWhenVisible>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeInWhenVisible key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
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
                <div className="flex space-x-4 items-center">
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
                  <button
                    onClick={() => setModalProject(project)}
                    className="ml-auto px-4 py-1.5 bg-primary text-white rounded-md text-sm hover:bg-secondary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {modalProject && (
          <ProjectModal
            isOpen={!!modalProject}
            onClose={() => setModalProject(null)}
            title={modalProject.title}
            description={modalProject.description}
            technologies={modalProject.technologies}
            github={modalProject.github}
            demo={modalProject.demo}
            details={modalProject.details || ''}
          />
        )}
      </div>
    </section>
  )
}

export default Projects;
