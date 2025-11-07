import React, { useState, useMemo } from 'react'

const ProjectListModal = ({ projects, onProjectClick, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag))
    })
    return ['all', ...Array.from(tags).sort()]
  }, [projects])

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') {
      return projects
    }
    return projects.filter(project => project.tags.includes(selectedFilter))
  }, [projects, selectedFilter])

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 md:p-8 flex items-center justify-between z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          All Projects
        </h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Sticky Filter Section */}
      <div className="sticky top-[88px] bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 md:p-6 z-10">
        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedFilter(tag)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedFilter === tag
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tag === 'all' ? 'All' : tag}
            </button>
          ))}
        </div>

        {/* Project Count */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </div>
      </div>

      {/* Scrollable Projects Grid */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-200 dark:border-gray-600"
                onClick={() => onProjectClick(project)}
              >
                {/* Project Image */}
                <div className="h-40 relative overflow-hidden bg-gray-100 dark:bg-gray-600">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-white text-4xl">📱</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No projects found</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectListModal
