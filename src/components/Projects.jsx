import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: '프로젝트 1',
      description: '최신 웹 기술을 활용한 풀스택 웹 애플리케이션입니다. 사용자 친화적인 인터페이스와 효율적인 백엔드 구조를 갖추고 있습니다.',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: '프로젝트 2',
      description: 'Python과 Django를 사용한 데이터 분석 플랫폼입니다. 실시간 데이터 처리와 시각화 기능을 제공합니다.',
      tags: ['Python', 'Django', 'PostgreSQL'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: '프로젝트 3',
      description: 'Vue.js와 Firebase를 활용한 실시간 협업 도구입니다. 팀원들과 함께 효율적으로 작업할 수 있습니다.',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="text-white text-6xl">📱</span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
                  >
                    GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 transition-colors"
                  >
                    Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
