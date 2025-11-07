import React from 'react'
import Badge from '../ui/Badge'
import SkillBadge from '../ui/SkillBadge'
import skillsData from '../../assets/data/skills.json'

export default function ProjectDetailModal({ project, onClose, onBack }) {
  // Helper function to get skill icon from skills.json
  const getSkillIcon = (skillName) => {
    for (const category of skillsData.categories) {
      const skill = category.skills.find(s => 
        s.name.toLowerCase() === skillName.toLowerCase()
      )
      if (skill) return skill.icon
    }
    return null
  }

  if (!project) return null

  return (
    <div className="w-full">
      {/* 헤더 */}
      <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 md:p-8 z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              {project.award && (
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm font-semibold rounded-full">
                  🏆 {project.award}
                </span>
              )}
            </div>
            {project.tagline && (
              <p className="text-base text-gray-600 dark:text-gray-400 mb-3">{project.tagline}</p>
            )}
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-500">
              {project.period && <span>📅 {project.period}</span>}
              {project.teamSize && <span>👥 {project.teamSize}</span>}
            </div>
          </div>
          {/* 버튼들 */}
          <div className="flex items-center gap-2 ml-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="View on GitHub"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="View Demo"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {onBack && (
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Back to list"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            )}
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
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-6">
        {/* 개요 */}
        {project.longDescription && (
          <section className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {project.longDescription}
            </p>
          </section>
        )}

        {/* 기술 스택 & 담당 역할 */}
        {((project.tags && project.tags.length > 0) || (project.role && project.role.length > 0)) && (
          <section className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 space-y-6">
            {/* 기술 스택 */}
            {project.tags && project.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <SkillBadge
                      key={idx}
                      name={tag}
                      icon={getSkillIcon(tag)}
                      size="md"
                      variant="gray"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 담당 역할 */}
            {project.role && project.role.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Role</h3>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((role, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-md">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 배경 & 문제 */}
        {(project.background || project.persona) && (
          <section className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 space-y-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Background</h3>
            
            {project.background?.purpose && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">목적</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.background.purpose}
                </p>
              </div>
            )}
            
            {project.background?.problem && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">해결하려던 문제</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.background.problem}
                </p>
              </div>
            )}

            {project.persona?.target && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">타겟 사용자</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.persona.target}</p>
              </div>
            )}
          </section>
        )}

        {/* 차별화 포인트 */}
        {project.uniquePoints && project.uniquePoints.length > 0 && (
          <section className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Key Features</h3>
            <ul className="space-y-4">
              {project.uniquePoints.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center text-xs font-semibold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 기술적 성과 */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Technical Highlights</h3>
            <div className="space-y-6">
              {project.highlights.map((highlight, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 요약 */}
        {project.summary && (
          <section className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              {project.summary}
            </p>
          </section>
        )}

        {/* 링크 */}
        {(project.github || project.demo) && (
          <section className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-center font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg text-center font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Demo
              </a>
            )}
          </section>
        )}
      </div>
    </div>
  )
}
