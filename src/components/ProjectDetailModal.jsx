import React from 'react'
import Badge from './ui/Badge'

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="w-full">
      {/* 헤더 */}
      <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 md:p-8 flex items-start justify-between">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h2>
          {project.tagline && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">{project.tagline}</p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            {project.period && (
              <span className="flex items-center gap-1">
                📅 {project.period}
              </span>
            )}
            {project.teamSize && (
              <span className="flex items-center gap-1">
                👥 {project.teamSize}
              </span>
            )}
          </div>
        </div>
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors ml-4"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="p-6 md:p-8 space-y-8">
        {/* 긴 설명 */}
        {project.longDescription && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">개요</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.longDescription}</p>
          </section>
        )}

        {/* 배경 & 문제 */}
        {project.background && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">배경</h3>
            <div className="space-y-3">
              {project.background.purpose && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">목적</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.background.purpose}
                  </p>
                </div>
              )}
              {project.background.problem && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">해결하려던 문제</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.background.problem}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 사용자 페르소나 */}
        {project.persona && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">사용자</h3>
            <div className="space-y-3">
              {project.persona.target && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">타겟</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.persona.target}</p>
                </div>
              )}
              {project.persona.painPoint && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">문제점</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.persona.painPoint}</p>
                </div>
              )}
              {project.persona.needs && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">필요한 기능</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.persona.needs}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 차별화 포인트 */}
        {project.uniquePoints && project.uniquePoints.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">차별화 포인트</h3>
            <ul className="space-y-3">
              {project.uniquePoints.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 pt-0.5">{point}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 담당 역할 */}
        {project.role && project.role.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">담당 역할</h3>
            <div className="flex flex-wrap gap-2">
              {project.role.map((role, idx) => (
                <Badge key={idx} variant="blue" size="md" className="px-4 py-2">
                  {role}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* 기술 하이라이트 */}
        {project.highlights && project.highlights.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">기술적 성과</h3>
            <div className="space-y-4">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-blue-500 pl-4 py-2"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 기술 스택 */}
        {project.tags && project.tags.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="gray" size="md" className="hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* 요약 */}
        {project.summary && (
          <section className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">요약</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              {project.summary}
            </p>
          </section>
        )}

        {/* 수상 경력 */}
        {project.award && (
          <section className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 md:p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-200">수상</h4>
                <p className="text-amber-700 dark:text-amber-300">{project.award}</p>
              </div>
            </div>
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
