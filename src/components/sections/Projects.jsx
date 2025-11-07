import React, { useState, useMemo, useEffect, useRef } from 'react'
import projectsData from '../../assets/data/projects.json'
import Modal from '../ui/Modal'
import ProjectDetailModal from '../modals/ProjectDetailModal'
import ProjectListModal from '../modals/ProjectListModal'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [isListModalOpen, setIsListModalOpen] = useState(false)
  const [fromList, setFromList] = useState(false)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  // Get 3 most recent projects
  const recentProjects = useMemo(() => {
    return [...projectsData]
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3)
  }, [])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]))
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [recentProjects])

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setFromList(false)
    setIsDetailModalOpen(true)
  }

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false)
    setFromList(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const handleProjectClickFromList = (project) => {
    setSelectedProject(project)
    setFromList(true)
    setIsListModalOpen(false)
    setIsDetailModalOpen(true)
  }

  const handleBackToList = () => {
    setIsDetailModalOpen(false)
    setIsListModalOpen(true)
  }

  const handleViewAllProjects = () => {
    setIsListModalOpen(true)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Recent Projects"
          subtitle="Check out my latest work"
        />

        {/* Recent Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              ref={setCardRef(index)}
              className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer ${
                visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
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
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="gray" size="md">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
                    >
                      GitHub
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 transition-colors"
                    >
                      Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <button
            onClick={handleViewAllProjects}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Project List Modal */}
      <Modal isOpen={isListModalOpen} onClose={() => setIsListModalOpen(false)}>
        <ProjectListModal
          projects={projectsData}
          onProjectClick={handleProjectClickFromList}
          onClose={() => setIsListModalOpen(false)}
        />
      </Modal>

      {/* Project Detail Modal */}
      <Modal isOpen={isDetailModalOpen} onClose={handleCloseDetailModal}>
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={handleCloseDetailModal}
          onBack={fromList ? handleBackToList : null}
        />
      </Modal>
    </section>
  )
}

export default Projects
