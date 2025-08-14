// src/components/ProjectCard.tsx

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  live?: string
}

const ProjectCard = ({ title, description, tags, image, github, live }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-primary text-white text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary">
            <FaGithub size={20} />
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary">
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
