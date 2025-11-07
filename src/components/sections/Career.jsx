import React, { useState } from 'react'
import profileData from '../../assets/data/profile.json'
import skillsData from '../../assets/data/skills.json'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import SkillBadge from '../ui/SkillBadge'

const Career = () => {
  const [activePositions, setActivePositions] = useState(
    profileData.career?.map((job) => {
      // Find the latest position (current position)
      return job.positions?.length > 0 ? job.positions.length - 1 : 0
    }) || []
  )
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
  const renderProjectName = (projectText) => {
    const match = projectText.match(/^(.*?)[''](.+?)[''](.*)$/)
    if (match) {
      return (
        <>
          <span className="font-normal">{match[1]}</span>
          <span className="font-bold">'{match[2]}'</span>
          <span className="font-normal">{match[3]}</span>
        </>
      )
    }
    return <span className="font-semibold">{projectText}</span>
  }

  const getProjectImage = (projectName) => {
    if (projectName.includes('스마토링') || projectName.includes('Smartoring')) {
      return '/assets/images/projects/smartoring.webp'
    }
    if (projectName.includes('이음페이') || projectName.includes('IEUM-Pay')) {
      return '/assets/images/projects/ieumpay.webp'
    }
    if (projectName.includes('마이브러리') || projectName.includes('MyBrary')) {
      return '/assets/images/projects/mybrary.webp'
    }
    return null
  }

  return (
    <section id="career" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Career" />

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">경력</h3>
          <div className="space-y-8">
            {profileData.career?.map((job, jobIndex) => (
              <div key={jobIndex} className="relative pl-8 border-l-2 border-blue-500">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

                {/* Job content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Company Info + Position Tabs */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    {/* Company Info */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      {job.logo && (
                        <img
                          src={job.logo}
                          alt={`${job.company} 로고`}
                          className="h-16 w-auto object-contain flex-shrink-0"
                        />
                      )}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.company}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{job.department}</p>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-px h-12 bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>

                    {/* Position Tabs */}
                    <div className="flex gap-2 flex-wrap">
                      {job.positions?.map((position, posIndex) => (
                        <button
                          key={posIndex}
                          onClick={() => {
                            const newActivePositions = [...activePositions]
                            newActivePositions[jobIndex] = posIndex
                            setActivePositions(newActivePositions)
                          }}
                          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                            activePositions[jobIndex] === posIndex
                              ? 'bg-blue-500 text-white shadow-md'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          <div className="text-left">
                            <div className="font-semibold">{position.title}</div>
                            <div className={`text-xs mt-0.5 ${
                              activePositions[jobIndex] === posIndex 
                                ? 'text-blue-100' 
                                : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {position.period}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  {job.positions?.[activePositions[jobIndex]]?.responsibilities?.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">담당 업무</h5>
                      <ul className="space-y-2">
                        {job.positions[activePositions[jobIndex]].responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex-shrink-0">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {job.positions?.[activePositions[jobIndex]]?.techStack?.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">기술 스택</h5>
                      <div className="flex flex-wrap gap-2">
                        {job.positions[activePositions[jobIndex]].techStack.map((tech, idx) => (
                          <SkillBadge 
                            key={idx} 
                            name={tech}
                            icon={getSkillIcon(tech)}
                            size="sm"
                            variant="gray"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {job.positions?.[activePositions[jobIndex]]?.achievements?.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">주요 성과</h5>
                      <div className="space-y-2">
                        {job.positions[activePositions[jobIndex]].achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-green-50 dark:bg-green-900/20 border-l-3 border-green-500 text-sm text-gray-700 dark:text-green-300 rounded"
                          >
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        {profileData.education?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">학력</h3>
            <div className="space-y-8">
              {profileData.education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-indigo-500"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

                  {/* Education content */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="indigo" size="sm">
                          {edu.type}
                        </Badge>
                        <Badge variant="gray" size="sm">
                          {edu.period}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        {edu.logo && (
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} 로고`}
                            className="h-16 w-auto object-contain flex-shrink-0"
                          />
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.institution}</h4>
                            {edu.url && (
                              <a
                                href={edu.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
                                title="바로가기"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                          {edu.major && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              전공: {edu.major} {edu.duration && `(${edu.duration})`}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  {edu.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards Section */}
        {profileData.awards?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">수상</h3>
            <div className="space-y-8">
              {profileData.awards.map((award, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-amber-400">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-amber-400 rounded-full transform -translate-x-2.5 hover:scale-110 transition-transform duration-200"></div>

                  {/* Award content */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    {/* Background layer - Image or Gradient */}
                    {getProjectImage(award.project) ? (
                      <>
                        {/* Light mode */}
                        <div
                          className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-30 dark:hidden"
                          style={{
                            backgroundImage: `linear-gradient(to left, transparent 0%, rgba(255,255,255,0.95) 100%), url('${getProjectImage(award.project)}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        {/* Dark mode */}
                        <div
                          className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-30 hidden dark:block"
                          style={{
                            backgroundImage: `linear-gradient(to left, transparent 0%, rgba(31,41,55,0.95) 100%), url('${getProjectImage(award.project)}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                      </>
                    ) : (
                      <div className={`absolute inset-y-0 right-0 w-1/2 pointer-events-none ${
                        award.award === "최우수"
                          ? "bg-gradient-to-l from-amber-50/40 to-transparent dark:from-amber-900/10"
                          : award.award === "우수"
                          ? "bg-gradient-to-l from-slate-50/40 to-transparent dark:from-slate-900/10"
                          : "bg-gradient-to-l from-gray-50/40 to-transparent dark:from-gray-700/10"
                      }`} />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge 
                          variant={
                            award.award === "최우수" ? "amber"
                            : award.award === "우수" ? "slate"
                            : "gray"
                          }
                          size="sm"
                          className="font-bold"
                        >
                          {award.award}
                        </Badge>
                        <Badge variant="gray" size="sm">
                          {award.date}
                        </Badge>
                      </div>
                      <h4 className="text-gray-900 dark:text-white">{renderProjectName(award.project)}</h4>
                    </div>
                    <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400">{award.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {profileData.certifications?.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">자격증</h3>
            <div className="flex flex-wrap gap-3">
              {profileData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{cert.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">• {cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Career
