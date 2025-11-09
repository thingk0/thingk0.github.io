import React from 'react'
import SkillBadge from './SkillBadge'
import Badge from './Badge'
import skillsData from '../../assets/data/skills.json'

const ProjectCard = ({ project, index, isVisible, cardRef, onClick }) => {
  const getSkillIcon = (skillName) => {
    for (const category of skillsData.categories) {
      const skill = category.skills.find(s => 
        s.name.toLowerCase() === skillName.toLowerCase()
      )
      if (skill) return skill.icon
    }
    return null
  }

  return (
    <div
      ref={cardRef}
      className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms`, height: '460px' }}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="h-48 flex-shrink-0 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className={`h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
            <span className="text-white text-6xl">📱</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <SkillBadge
              key={idx}
              name={tag}
              icon={getSkillIcon(tag)}
              variant="gray"
              size="sm"
            />
          ))}
          {project.tags.length > 4 && (
            <Badge variant="gray" size="sm">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Links */}
        {project.demo && (
          <div className="flex gap-4 mt-auto">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
